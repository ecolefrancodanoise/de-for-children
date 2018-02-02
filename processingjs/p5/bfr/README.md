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

Copyright 2018 Martin Clausen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
