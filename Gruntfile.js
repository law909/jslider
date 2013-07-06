module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	uglify: {
		build: {
			files: {
				'bin/jquery.slider.min.js': [
					'js/jshashtable-2.1_src.js',
					'js/jquery.numberformatter-1.2.3.js',
					'js/tmpl.js',
					'js/jquery.dependClass-0.1.js',
					'js/draggable-0.1.js',
					'js/jquery.slider.js'
				]
			}
		}
	},
	concat: {
		debug: {
			src: [
				'js/jshashtable-2.1_src.js',
				'js/jquery.numberformatter-1.2.3.js',
				'js/tmpl.js',
				'js/jquery.dependClass-0.1.js',
				'js/draggable-0.1.js',
				'js/jquery.slider.js'
			],
			dest: 'bin/jquery.slider.min.js'
		}
	}
});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

// Default task(s).
grunt.registerTask('default', ['uglify']);

};