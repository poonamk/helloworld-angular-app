module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),    
	
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
    },
	jshint: {
      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Grunfile.js', 'angular-frontend/src/*.js'],
	  options: {
	jshintrc: '.jshintrc.json'
  }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	 grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('hintjs', ['jshint']);
};
