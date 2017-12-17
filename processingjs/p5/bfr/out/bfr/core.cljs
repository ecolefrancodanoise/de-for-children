(ns bfr.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  {:planets [{:name "mars"
              :size 10
              :color [255, 160, 0]
              :x 227.9e9
              :y 0
              :xp 0
              :yp (/ -86.871e6 3600)
              :xpp 0
              :ypp 0
              :m 6.39e23}
    		 {:name "earth"
              :size 18
              :color [0, 200, 0]
    		  :x -149.6e9
    		  :y 0
    		  :xp 0
    		  :yp 3e4
              :xpp 0
              :ypp 0
    		  :m 5.972e24}
             {:name "sun"
              :size 40
              :color [255, 210, 0]
    	      :x 0
    		  :y 0
    		  :xp 0
    		  :yp 0
              :xpp 0
              :ypp 0
    		  :m 1.989e30}]
    :space-ship {:name "bfr"
                 :size 4
                 :x (- -149.6e9 10e5)
                 :y (+ 0 10e5)
                 :xp (- 0 200e2)
                 :yp (+ 3e4 1.2780e4)
                 :xpp 0
                 :ypp 0
                 :m 10e5
                 :color [190, 190, 190]
                 :brake-start 432e5
                 :brake-end 459e5}
    :t 0
	:dt 1e5
    :launch-t 376e5
  	:G 6.67408e-11})

(defn sqrt [x] (Math/sqrt x))
(defn pow [x n] (Math/pow x n))
;;(def sqrt (.-sqrt js/Math))
;;(def pow (.-pow js/Math))

(defn draw-planets [planets]
  (doseq [planet planets]
    (apply q/fill (:color planet))
    (q/ellipse (+ 200 (/ (:x planet) 2e9))
               (+ 200 (/ (:y planet) 2e9))
               (:size planet)
               (:size planet)))
  (if (= 4 (count planets))
    (let [bfr (last planets)
          mars (first planets)]
      (q/fill (:color bfr))
      (q/ellipse (+ 960 (- (/ (:x bfr) 1e6) (/ (:x mars) 1e6)))
                 (+ 300 (- (/ (:y bfr) 1e6) (/ (:y mars) 1e6)))
                 (* (:size bfr) 1.7)
                 (* (:size bfr) 1.7)))))

(defn calc-xpp-and-ypp [G]
  (fn
  [{x0 :x y0 :y xp0 :xp yp0 :yp xpp0 :xpp ypp0 :ypp m :m name0 :name :as p0} 
   {x1 :x y1 :y xp1 :xp yp1 :yp m1 :m name1 :name}]
  (if (= name0 name1)
    p0
    (let [d1 (sqrt (+ (* (- x1 x0) (- x1 x0)) (* (- y1 y0) (- y1 y0))))
          xpp (+ xpp0 (/ (* (* (- G) m1) (- x0 x1)) (pow d1 3)))
          ypp (+ ypp0 (/ (* (* (- G) m1) (- y0 y1)) (pow d1 3)))]
      (assoc p0 :xpp xpp :ypp ypp)))))

(defn update-planet [dt]
   (fn [{:keys [x y xp yp xpp ypp] :as p}]
    (let [xp (+ xp (* xpp dt))
    	  yp (+ yp (* ypp dt))
          x  (+ x (* xp dt))
          y  (+ y (* yp dt))]
          (assoc p :xp xp :yp yp :x x :y y :xpp 0 :ypp 0))))

(defn braking? [{:keys [brake-start brake-end]} t]
  (and (>= t brake-start) (<= t brake-end)))
    
(defn brake-ship [{sxp :xp syp :yp sxpp :xpp sypp :ypp ship-name :name :as ship} 
                  {mxp :xp myp :yp planet-name :name}]
              (let [v (sqrt (+ (* (- sxp mxp) (- sxp mxp)) (* (- syp myp) (- syp myp))))
                  xpp (+ sxpp (* (/ (- (- sxp mxp)) v) 0.00467))
                  ypp (+ sypp (* (/ (- (- syp myp)) v) 0.00467))]
                (assoc ship :xpp xpp :ypp ypp)))

(defn update-state [{:keys [planets space-ship dt t G launch-t] :as state}]
  (let [state (-> state
  	(assoc :planets
         (vec (for [planet planets]
           (let [planet-upd-xpp-ypp (reduce (calc-xpp-and-ypp G) planet planets)]
             (if (and (braking? space-ship t) (= (:name planet) "bfr"))
               ((update-planet dt) (brake-ship planet-upd-xpp-ypp (first planets)))
               ((update-planet dt) planet-upd-xpp-ypp))))))                 
    (assoc :t (+ t dt)))]
  (cond-> state
   (= t 420e5) (assoc :dt (/ dt 10))
   (= t 455e5) (assoc :dt (/ dt 50))
   (and (> t launch-t) (<= (- t dt) launch-t)) (update :planets conj 
                                           		(let [{:keys [x y xp yp]} (second planets)]
                                                       (-> space-ship
                                                           (assoc :x (- x 10e5))
                                                           (assoc :y (+ y 10e5))
                                                           (assoc :xp (- xp 200e2))
                                                           (assoc :yp (+ yp 1.2780e4))))))))

(defn draw-state [state]
  (let [mars (first (:planets state))
        mars-size (:size mars)
        planets (:planets state)
        t (:t state)
        dt (:dt state)]
  (q/background 0 0 0)
  (q/fill 0 0 40)
  (q/rect 640 0 640 720)
  (apply q/fill (:color mars))
  (q/ellipse 960 300 (* mars-size 1.5) (* mars-size 1.5))
  (q/stroke 255 255 255)
  (q/fill 255 255 255)
  (q/text (str "Time: " t) 10 10)
  (q/text (str "DT: " dt) 10 30)
  (q/text-size 32)
  (q/text "Solsystemet" 250 30)
  (q/text "Mars Zoom" (+ 250 640) 30)
  (q/stroke 0 0 0)
  (draw-planets planets)))

(q/defsketch my
  :host "host"
  :size [1280 600]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])

(comment
    fill(0, 0, 40);
    rect(640, 0, 640, 720);
    fill(mars.color);
    ellipse(960, 300, mars.size*1.5, mars.size*1.5);
    //Text
    stroke(255, 255, 255);
    fill(255, 255, 255);
    text("Time:" + t, 10, 10);
    text("DT:" + dt, 10, 30    );

    text("Solar System");
    //Bigger text
    textSize(32);
    text("Solsystemet", 250, 30);
    text("Mars Zoom", 250+640, 30);
    stroke(0, 0, 0);

http://quil.info/sketches/local/fef3baa0e393b7d6c4831836cbf31270f690a2e78f94743e3e5583389c88d794
    )


