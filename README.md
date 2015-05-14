# Fruity Dashboard

I started this project to run a dashboard on my Pi as a frontend to the various services I was using (torrent, web projects, etc). Though it's called fruity-dashboard and I relate it to Raspberry Pi, it actually is really independent of the pi. This could be installed on any apache or nginx server.

Install the necessary devDependencies & frontend libraries with `npm install && bower install`

## Development

#### gulp tasks

- `gulp watch` : compiles scss and starts a browser-sync server with livereload at :3000
- `gulp build` : builds the production version to a `build_dist` folder. You can modify the foldername at the top of the gulpfile.
- `gulp push` : pushes to a server with the credentials provided. The default Raspberry Pi credentials and port 22 (SFTP) have already been added.


#### Dependencies

> This project uses gulp, browser-sync, fontawesome and bifrost as the main dependencies

#### The front-end framework

I chose to experiment with [chopstick](https://github.com/getchopstick/chopstick-boilerplate) as the front-end framework.

It's a expansive but yet really modular SCSS framework for styling and creating components.

Take a good look at their docs (has some learning curve to it) and make edits only in `scss/theme/modules`. The main entry point for the widgets is `_fruityapp.scss` inside the modules folder.



## Roadmap

This isn't really anywhere near being release version. Currently only the frontend is set up, since adding widgets still relies on manual HTML adding.

1. Add the REST api so that widgets can be added/removed/changed to a database.
2. Convert this to a node project for running natively in node instead of apache2 on the pi.
3. Create a demo on a webserver (or github pages)




## Screenshots

![screenshot](http://imgur.com/w3VxxZ2.png)

![screenmobile](http://imgur.com/wWEBsxz.png)



### License

The MIT License (MIT)

Copyright (c) 2015 Thibault Maekelbergh

Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the "Software"), to deal

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE

AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER

LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,

OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

SOFTWARE.

