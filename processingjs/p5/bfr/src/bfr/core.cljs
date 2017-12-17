(ns bfr.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/color-mode :rgb)
  {:planets [{:name "earth"
              :size 18
              :color [0, 200, 0]
    	      :x -149.6e9
    	      :y 0
    	      :xp 0
    	      :yp 3e4
              :xpp 0
              :ypp 0
    	      :m 5.972e24}
             {:name "mars"
              :size 10
              :color [255, 160, 0]
              :x 227.9e9
              :y 0
              :xp 0
              :yp (/ -86.871e6 3600)
              :xpp 0
              :ypp 0
              :m 6.39e23}
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
                :xpp 0
                :ypp 0
                :m 10e5
                :color [190, 190, 190]
                :brake-start 432e5
                :brake-end 459.0e5
                :position-history []}
   :t 0
   :dt 1e5
   :launch-t 376e5
   :G 6.67408e-11})

;;(defn sqrt [x] (Math/sqrt x))
;;(defn pow [x n] (Math/pow x n))
(def sqrt (.-sqrt js/Math))
(def pow (.-pow js/Math))

(defn draw-planets [planets]
  (doseq [planet planets]
    (apply q/fill (:color planet))
    (q/ellipse (+ 200 (/ (:x planet) 2e9))
               (+ 200 (/ (:y planet) 2e9))
               (:size planet)
               (:size planet)))
  (if (= 4 (count planets))
    (let [bfr (last planets)
          mars (second planets)
          bfr-history (:position-history bfr)]
      (q/fill (:color bfr))
      (q/ellipse (+ 960 (- (/ (:x bfr) 1e6) (/ (:x mars) 1e6)))
                 (+ 300 (- (/ (:y bfr) 1e6) (/ (:y mars) 1e6)))
                 (* (:size bfr) 1.7)
                 (* (:size bfr) 1.7))
      (q/stroke 190 190 190)
      (doseq [[[bfr-x-1 bfr-y-1 mars-x-1 mars-y-1]
               [bfr-x-2 bfr-y-2 mars-x-2 mars-y-2]]
              (partition 2 1 bfr-history)]
        (q/line (+ 960 (- (/ bfr-x-1 1e6) (/ mars-x-1 1e6)))
                (+ 300 (- (/ bfr-y-1 1e6) (/ mars-y-1 1e6)))
                (+ 960 (- (/ bfr-x-2 1e6) (/ mars-x-2 1e6)))
                (+ 300 (- (/ bfr-y-2 1e6) (/ mars-y-2 1e6))))))))

(defn calc-xpp-and-ypp [G]
  (fn  [{x0 :x y0 :y xpp0 :xpp ypp0 :ypp m :m name0 :name :as p0} 
       {x1 :x y1 :y m1 :m name1 :name}]
  (if (= name0 name1)
    p0
    (let [d1 (sqrt (+ (* (- x1 x0) (- x1 x0)) (* (- y1 y0) (- y1 y0))))
          xpp (+ xpp0 (/ (* (* (- G) m1) (- x0 x1)) (pow d1 3)))
          ypp (+ ypp0 (/ (* (* (- G) m1) (- y0 y1)) (pow d1 3)))]
      (assoc p0 :xpp xpp :ypp ypp)))))

(defn braking? [{:keys [brake-start brake-end]} t]
  (and (>= t brake-start) (<= t brake-end)))

(defn brake-ship [{sxp :xp syp :yp sxpp :xpp sypp :ypp ship-name :name :as ship} 
                  {mxp :xp myp :yp planet-name :name}]
  (let [v (sqrt (+ (* (- sxp mxp) (- sxp mxp)) (* (- syp myp) (- syp myp))))
        xpp (+ sxpp (* (/ (* -1 (- sxp mxp)) v) 0.00467)) 
        ypp (+ sypp (* (/ (* -1 (- syp myp)) v) 0.00467))]
    (assoc ship :xpp xpp :ypp ypp)))

(defn update-planet [dt G]
  (fn [planet planets {:keys [t space-ship]}] 
    (let [planet (reduce (calc-xpp-and-ypp G) planet planets)
          mars (second planets)
          planet (if (and (= "bfr" (:name planet)) (braking? space-ship t))
                   (brake-ship planet mars)
                   planet)
          {:keys [x y xp yp xpp ypp]} planet
          xp (+ xp (* xpp dt))
    	  yp (+ yp (* ypp dt))
          x  (+ x (* xp dt))
          y  (+ y (* yp dt))]
      (assoc planet :xp xp :yp yp :x x :y y :xpp 0 :ypp 0))))

(defn update-state [{:keys [planets space-ship dt t G launch-t] :as state}]
  (let [t (+ dt t)
        state (cond-> state
                true (assoc :t (+ (:t state) dt))
                (and (> t launch-t) (<= (- t dt) launch-t))
                (update :planets conj
                        (let [{:keys [x y xp yp]} (first planets)]
                          (-> space-ship
                              (assoc :x (- x 10e5))
                              (assoc :y (+ y 10e5))
                              (assoc :xp (- xp 200e2))
                              (assoc :yp (+ yp 1.2780e4)))))                
                (= t 420e5) (assoc :dt (/ dt 10))
                (= t 455e5) (assoc :dt (/ dt 50)))]
    (let [{:keys [dt planets]} state
          new-planets (reduce-kv
                       (fn [planets i planet]
                         (assoc planets i ((update-planet dt G) planet planets state)))
                       planets planets)
          new-planets (if (= 4 (count planets))
                        (let [{mars-x :x mars-y :y} (second new-planets)
                              {bfr-x :x bfr-y :y} (last new-planets)]
                          (update-in new-planets [3 :position-history] conj
                                     [bfr-x bfr-y mars-x mars-y])) new-planets)]
      (assoc state :planets new-planets))))

(defn draw-state [state]
  (let [mars (second (:planets state))
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
    (q/text "Solar System" 250 30)
    (q/text "Mars Zoom" (+ 250 640) 30)
    (q/stroke 0 0 0)
    (draw-planets planets)))

(q/defsketch my
  :settings #(q/smooth 2)
  :host "host"
  :size [1280 600]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
