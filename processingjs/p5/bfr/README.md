# BFR

A Quil sketch that simulates Earth, Mars, the Sun and SpaceX's BFR trip to Mars orbit.

## Dependencies

[Leiningen](https://leiningen.org/)

## Usage

Run `lein compile` command and open `index.html` in your browser.

For interactive development run `lein cljsbuild auto` command. This command will be recompiling cljs to js each time you modify `core.cljs` and you can see result immediately by refreshing page.

Alternatively copy and paste the code from src/bfr/core.cljs line 5 and onwards (ie. excluding the namespace declaration) into http://quil.info/sketches/create and click *Run*.

## License

Copyright © 2016 Den Dansk Franske Skole - cljs version by Martin Clausen

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
