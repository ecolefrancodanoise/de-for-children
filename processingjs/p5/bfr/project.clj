(defproject bfr "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [quil "2.6.0"]
                 [org.clojure/clojurescript "1.9.473"]]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.9"]]

  :cljsbuild
  {:builds {:main
            {
             :source-paths ["src"]
             :compiler
             {:asset-path "js/out"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/out"
              :main "bfr.core"
              }
             }
            }
   }
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.4-6"]
                                  [binaryage/devtools "0.7.2"]
                                  [com.cemerick/piggieback "0.2.2"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :cljsbuild {
                               :builds {
                                        :main {:figwheel true
                                               :compiler {:optimizations :none
                                                          :source-map true
                                                          ;; namespace to load before the `:main` namespace
                                                          :preloads [devtools.preload]}}}}}
             ;; `prod` key is not known to lein, choose any you want
             :prod {:cljsbuild {:builds {:main {:compiler {:optimizations :advanced
                                                           :pretty-print false}}}}}})
