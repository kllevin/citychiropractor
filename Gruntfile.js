module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      html: {
        files: ['./src/**/*'],
        tasks: ['html']
      },

      sass: {
        files: './assets/**/*.scss',
        tasks: ['style']
      },

      css: {
        files: ['./dist/styles/*.css']
      },

      uglify: {
        files:['./dist/scripts/*.js']
      },

      livereload: {
        files: ['./dist/**/*'],
        options: {livereload: true}
      }

    },

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

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/styles/style.css': 'assets/styles/style.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'dist/styles/style.css': 'dist/styles/style.css'
        }
      },
      options: ['last 2 versions', 'ie 9']
    },

    uglify: {
      options: {
          mangle: false,
          beautify: true
        },
      dist: {
        files: {
          'dist/scripts/app.js': ['assets/scripts/*.js']
        }
      }
    },

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },

    clean: {
      all: ['./dist/*']
    },

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

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/images/'
        }]
      }
    },

    copy: {
      main: {
        files: [{
            expand: true,
            cwd: 'assets/images/',
            src: '**/*.{gif,jpg,jpeg,png,svg,webp}',
            dest: 'dist/images',
            filter: 'isFile'
          }]
      }
    },

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
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('assemble');


  grunt.registerTask('style', ['sass', 'autoprefixer']);

  grunt.registerTask('html', ['assemble']);

  grunt.registerTask('serve', ['default', 'connect', 'watch']);

  grunt.registerTask('publish', ['default', 'gh-pages']);

  grunt.registerTask('default', ['clean', 'style', 'imagemin', 'html', 'copy']);

};