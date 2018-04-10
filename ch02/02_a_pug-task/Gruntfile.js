'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pug: {
        compile: {
          options: {
            data: {
              debug: false
            }
          },
          files: {
            'build/html/index.html': 'public/html/**/index.pug'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-pug');
};