module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),    
	jshint: {
            all: ['Gruntfile.js','angular-frontend/src/superb.js','angular-frontend/src/impressive.js']
        },
    concat: {
      build: {
        files: {
          'angular-frontend/dist/<%= pkg.name %>.js': [
            'angular-frontend/src/superb.js',
            'angular-frontend/src/impressive.js'
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'angular-frontend/dist/<%= pkg.name %>.js',
        dest: 'angular-frontend/dist/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
 // grunt.registerTask('default', ['jshint','clean']);
  grunt.registerTask('default', ['concat', 'uglify']);

};
