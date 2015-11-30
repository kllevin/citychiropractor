module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Setup env vars
    app: {
      source:   'app',
      dist:     'dist'
    },

    // Watch
    watch: {

      // SASS COMPILATION & AUTOPREFIXER
      sass: {
        files: '<%= app.source %>/assets/**/*.scss',
        tasks: [
          'sass:dev',
          'autoprefixer'
        ],
        options: {
          spawn: false
        }
      },

      html: {
        files: ['./src/**/*'],
        tasks: ['html']
      },

      uglify: {
        files:['./dist/scripts/*.js']
      },

      livereload: {
        files: ['./dist/**/*'],
        options: {livereload: true}
      }
    },

    // Assemble
    assemble: {
      options: {
        layout: 'page.hbs',
        layoutdir: './src/bonnet/layouts/',
        partials: './src/bonnet/partials/**/*'
      },
      posts: {
        files: [{
          cwd: './src/content/_pages/',
          dest: './dist/',
          expand: true,
          src: '**/*.hbs'
        }]
      }
    },

    // Sass Compilation
    sass: {
      options: {
        sourceMap: false,
        precision: 3,
        // nested, expanded, compact, compressed
        outputStyle: 'expanded'
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'assets/styles',
          src: '**/*.{scss,sass}',
          dest: '<%= app.dist %>/styles',
          ext: '.css'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/styles',
          src: '**/*.{scss,sass}',
          dest: '<%= app.dist %>/styles',
          ext: '.css'
        }]
      }
    },

    // Autoprefixer
    autoprefixer: {
      options: ['last 2 versions', 'ie 10'],
      dev: {
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/styles',
          src: '**/*.css',
          dest: '<%= app.dist %>/styles'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/styles',
          src: '**/*.css',
          dest: '<%= app.dist %>/styles'
        }]
      }
    },

    // Uglify
    uglify: {
      options: {
          mangle: false,
          beautify: true
      },
      dist: {
        files: {
          'dist/scripts/app.js': [
          'assets/scripts/.js'
          ]
        }
      }
    },

    // Connect
    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },

    // Clean
    clean: {
      dev: [
        '<%= app.dist %>'
      ],
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= app.dist %>/*'
          ]
        }]
      }
    },

    // SVG Min
    svgmin: {
      options: {
        plugins: [{
          cleanupIDs: true,
          removeUselessStrokeAndFill: true,
          removeTitle: true,
          removeAttrs: true
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['*.svg'],
          dest: 'dist/images/'
        }]
      }
    },

    // Optimise images
    imagemin: {
      options: {
        progressive: true,
        optimizationLevel: 4
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= app.dist %>/images/'
        }]
      }
    },

    // Copy files over to dist
    copy: {
      fonts_dev: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'assets/fonts',
          src: '**/*.{woff,woff2}',
          dest: '<%= app.dist %>/fonts'
        }]
      },
      fonts_dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'assets/fonts',
          src: '**/*.{woff,woff2}',
          dest: '<%= app.dist %>/fonts'
        }]
      },
      images_dev: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'assets/images',
          src: '**/*.{gif,jpg,jpeg,png,webp}',
          dest: '<%= app.dist %>/images'
        }]
      }
    },

    // Minify HTML
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.dist %>',
          src: '**/*.html',
          dest: '<%= app.dist %>'
        }]
      }
    },

    // Minify CSS
    cssmin: {
      options: {
        keepSpecialComments: 0,
        check: 'gzip'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/styles',
          src: ['**/*.css'],
          dest: '<%= app.dist %>/styles'
        }]
      }
    },

    modernizr: {
      dist: {
        "dest": "assets/scripts/modernizr.js",
        "options": [
          "setClasses",
          "addTest",
          "html5printshiv",
          "testProp",
          "fnBind"
        ],
        "tests": [
          "css/flexbox",
          "css/flexboxtweener"
        ],
        "files": {
          "src": [
            "assets/**/*.{js,css,scss}"
          ]
        },
        "uglify": true
      }
    },

    // GH Pages
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('assemble');


  // Serve
  grunt.registerTask('serve', [
    'clean:dev',
    'sass:dev',
    'autoprefixer:dev',
    'imagemin',
    'svgmin',
    'copy:fonts_dev',
    'copy:images_dev',
    'assemble',
    'connect',
    'watch'
  ]);

  // Build
  grunt.registerTask('build', [
    'clean:dist',
    'sass:dist',
    'autoprefixer:dist',
    'cssmin',
    'imagemin',
    'svgmin',
    'copy:fonts_dist',
    'assemble',
    'htmlmin'
  ]);

  // Deploy
  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);

  // Default (serve)
  grunt.registerTask('default', ['serve']);
};