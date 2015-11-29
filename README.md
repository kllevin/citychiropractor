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
  - Rip out the page header from the views
  - Year needs to be dynamic for the copyright statement

- JS tasks:
  - Replace `js` class with `no-js` when JS is disabled
  - Toggle menu JS.

- CSS tasks:
  - Make responsive.
  - Flexbox feature detection
  - Autoprefixer browser support is accurate
  - Check repaints e.g. fixed header, might need `will-change: transform;`
  - Clean up Scally partials
  - Make sure they're no rouge hex's
  - Add a nice onload transition for the major structural elements on the home
    page, see: http://htmlcolorcodes.com/color-picker/
  - Print CSS
  - Style the browser upgrade banner

- SVG tasks:
  - Manually clean src logo SVG's
  - Inline all SVG's including logo's
  - Convert CAA logo to an SVG

- SEO tasks:
  - Meta elements for description and keywords
  - GA integration
  - WebMaster Tools integration
  - Google Business Directory
  - robots.txt

- Other:
  - Make sure all special characters are encoded e.g. ellipsis
  - Apply links where required
  - Favicons
  - .htaccess
  - Social media meta elements
  - Microdata
  - editorConfig file
  - browserslist file
  - `rel="external"` to all external links
  - Make sure all images have appropiate `alt` attributes
  - Apply curly quotes
