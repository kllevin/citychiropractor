# City Chiropractor

WIP version: [City Chiropractor](http://kllevin.github.io/citychiropractor/)

The build is using Assemble and Grunt to crunch the templates and create a
static site.

To run this project you will need:
- [Node](http://nodejs.org/)
- [Node-Sass](https://npmjs.org/package/node-sass)
- [Grunt-cli](http://gruntjs.com/)
- Bower?

## Grunt Tasks

- `grunt` compile your site into `./dist` directory
- `grunt style` compile SASS and autoprefix
- `grunt html` packages up site templates
- `grunt serve` packages up the site and serves it at `localhost:8000`
- `grunt publish` publishes to github pages
