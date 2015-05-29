module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-umd');
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		umd: {
			markerAnimate: {
				options: {
					src: 'markerAnimate.js',
					dest: 'dist/markerAnimate.js',
					deps: {
						'default': ['jQuery'],
						amd: ['jquery', 'jquery.easing'],
						cjs: ['jquery', 'jquery.easing']
					}
				}
			}
		},

		uglify: {
			options: {
				sourceMap: true,
				banner: '/* <%= grunt.task.current.target %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> Node wrapper for marker-animate (C) 2015 Terikon Software */\n'
			},
			markerAnimate: {
				src: 'dist/markerAnimate.js',
				dest: 'dist/markerAnimate.min.js'
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'markerAnimate.js']
		}
		
	});
	
	grunt.registerTask('default', ['umd', 'uglify']);
};