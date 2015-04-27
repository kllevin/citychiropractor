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

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },

    clean: {
      all: ['./dist/*.html']
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');


  grunt.registerTask('style', ['sass', 'autoprefixer']);

  grunt.registerTask('html', ['assemble'])

  grunt.registerTask('serve', ['default', 'connect', 'watch'])

  grunt.registerTask('default', ['style', 'clean', 'html']);

};