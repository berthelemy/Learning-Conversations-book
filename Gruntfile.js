module.exports = function(grunt) {


    // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
        options: {
            base: '_book'
        },
        src: ['**']
    }   
  });

    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('push', ['gh-pages']);

};

// TO BUILD:
// gitbook build
// grunt push