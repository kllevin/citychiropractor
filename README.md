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

## To Do

- Optimisation tasks:
  - Add HTML minification
  - Add CSS minification
  - Add JS minification
  - Add SVG minification
  - Add critical CSS
  - Add Resource Hints
  - Self-host fonts and async load them

- Assemble tasks:
  - `title` element
  - Year (copyright statement -> footer)

- JS tasks:
  - Replace `js` class with `no-js` when JS is disabled
  - Toggle menu JS.

- SVG tasks:
  - Manually clean src logo SVG's
  - Inline all SVG's including logo's
  - Convert CAA logo to an SVG

- Check repaints e.g. fixed header, might need `will-change: transform;`
- Autoprefixer browser support is accurate
- Favicons
- GA integration
- WebMaster Tools integration
- .htaccess
- Social media meta elements
- Microdata
- Browser upgrade banner
- Meta elements for description and keywords
- Clean up Scally partials
- Clean up font-stacks
- No rouge hex's
