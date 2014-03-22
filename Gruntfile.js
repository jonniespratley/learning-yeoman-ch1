// Generated on 2014-03-22 using generator-webapp 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		config : {
			// Configurable paths
			app : 'app',
			dist : 'dist'
		},

		// Watches files for changes and runs tasks based on the changed files
		watch : {
			bower : {
				files : ['bower.json'],
				tasks : ['bowerInstall']
			},
			js : {
				files : ['<%= config.app %>/scripts/{,*/}*.js'],
				tasks : ['jshint'],
				options : {
					livereload : true
				}
			},
			jstest : {
				files : ['test/spec/{,*/}*.js'],
				tasks : ['test:watch']
			},
			gruntfile : {
				files : ['Gruntfile.js']
			},
			styles : {
				files : ['<%= config.app %>/styles/{,*/}*.css'],
				tasks : ['newer:copy:styles', 'autoprefixer']
			},
			livereload : {
				options : {
					livereload : '<%= connect.options.livereload %>'
				},
				files : ['<%= config.app %>/{,*/}*.html', '.tmp/styles/{,*/}*.css', '<%= config.app %>/images/{,*/}*']
			}
		},

		// The actual grunt server settings
		connect : {
			options : {
				port : 9000,
				livereload : 35729,
				// Change this to '0.0.0.0' to access the server from outside
				hostname : 'localhost'
			},
			livereload : {
				options : {
					open : true,
					base : ['.tmp', '<%= config.app %>']
				}
			},
			test : {
				options : {
					port : 9001,
					base : ['.tmp', 'test', '<%= config.app %>']
				}
			},
			dist : {
				options : {
					open : true,
					base : '<%= config.dist %>',
					livereload : false
				}
			}
		},

		// Empties folders to start fresh
		clean : {
			dist : {
				files : [{
					dot : true,
					src : ['.tmp', '<%= config.dist %>/*', '!<%= config.dist %>/.git*']
				}]
			},
			server : '.tmp'
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint : {
			options : {
				jshintrc : '.jshintrc',
				reporter : require('jshint-stylish')
			},
			all : ['Gruntfile.js', '<%= config.app %>/scripts/{,*/}*.js', '!<%= config.app %>/scripts/vendor/*', 'test/spec/{,*/}*.js']
		},

		// Jasmine testing framework configuration options
		jasmine : {
			all : {
				options : {
					specs : 'test/spec/{,*/}*.js'
				}
			}
		},

		// Add vendor prefixed styles
		autoprefixer : {
			options : {
				browsers : ['last 1 version']
			},
			dist : {
				files : [{
					expand : true,
					cwd : '.tmp/styles/',
					src : '{,*/}*.css',
					dest : '.tmp/styles/'
				}]
			}
		},

		// Automatically inject Bower components into the HTML file
		bowerInstall : {
			app : {
				src : ['<%= config.app %>/index.html'],
				ignorePath : '<%= config.app %>/'
			}
		},

		// Renames files for browser caching purposes
		rev : {
			dist : {
				files : {
					src : ['<%= config.dist %>/scripts/{,*/}*.js', '<%= config.dist %>/styles/{,*/}*.css', '<%= config.dist %>/images/{,*/}*.*', '<%= config.dist %>/styles/fonts/{,*/}*.*', '<%= config.dist %>/*.{ico,png}']
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare : {
			options : {
				dest : '<%= config.dist %>'
			},
			html : '<%= config.app %>/index.html'
		},

		// Performs rewrites based on rev and the useminPrepare configuration
		usemin : {
			options : {
				assetsDirs : ['<%= config.dist %>', '<%= config.dist %>/images']
			},
			html : ['<%= config.dist %>/{,*/}*.html'],
			css : ['<%= config.dist %>/styles/{,*/}*.css']
		},

		// The following *-min tasks produce minified files in the dist folder
		imagemin : {
			dist : {
				files : [{
					expand : true,
					cwd : '<%= config.app %>/images',
					src : '{,*/}*.{gif,jpeg,jpg,png}',
					dest : '<%= config.dist %>/images'
				}]
			}
		},

		svgmin : {
			dist : {
				files : [{
					expand : true,
					cwd : '<%= config.app %>/images',
					src : '{,*/}*.svg',
					dest : '<%= config.dist %>/images'
				}]
			}
		},

		htmlmin : {
			dist : {
				options : {
					collapseBooleanAttributes : true,
					collapseWhitespace : true,
					removeAttributeQuotes : true,
					removeCommentsFromCDATA : true,
					removeEmptyAttributes : true,
					removeOptionalTags : true,
					removeRedundantAttributes : true,
					useShortDoctype : true
				},
				files : [{
					expand : true,
					cwd : '<%= config.dist %>',
					src : '{,*/}*.html',
					dest : '<%= config.dist %>'
				}]
			}
		},

		// By default, your `index.html`'s <!-- Usemin block --> will take care of
		// minification. These next options are pre-configured if you do not wish
		// to use the Usemin blocks.
		// cssmin: {
		//     dist: {
		//         files: {
		//             '<%= config.dist %>/styles/main.css': [
		//                 '.tmp/styles/{,*/}*.css',
		//                 '<%= config.app %>/styles/{,*/}*.css'
		//             ]
		//         }
		//     }
		// },
		// uglify: {
		//     dist: {
		//         files: {
		//             '<%= config.dist %>/scripts/scripts.js': [
		//                 '<%= config.dist %>/scripts/scripts.js'
		//             ]
		//         }
		//     }
		// },
		// concat: {
		//     dist: {}
		// },

		// Copies remaining files to places other tasks can use
		copy : {
			dist : {
				files : [{
					expand : true,
					dot : true,
					cwd : '<%= config.app %>',
					dest : '<%= config.dist %>',
					src : ['*.{ico,png,txt}', '.htaccess', 'images/{,*/}*.webp', '{,*/}*.html', 'styles/fonts/{,*/}*.*', 'bower_components/bootstrap/dist/fonts/*.*']
				}]
			},
			styles : {
				expand : true,
				dot : true,
				cwd : '<%= config.app %>/styles',
				dest : '.tmp/styles/',
				src : '{,*/}*.css'
			}
		},

		// Generates a custom Modernizr build that includes only the tests you
		// reference in your app
		modernizr : {
			devFile : '<%= config.app %>/bower_components/modernizr/modernizr.js',
			outputFile : '<%= config.dist %>/scripts/vendor/modernizr.js',
			files : ['<%= config.dist %>/scripts/{,*/}*.js', '<%= config.dist %>/styles/{,*/}*.css', '!<%= config.dist %>/scripts/vendor/*'],
			uglify : true
		},

		// Run some tasks in parallel to speed up build process
		concurrent : {
			server : ['copy:styles'],
			test : ['copy:styles'],
			dist : ['copy:styles', 'imagemin', 'svgmin']
		}
	});

	grunt.registerTask('serve', function(target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run(['clean:server', 'concurrent:server', 'autoprefixer', 'connect:livereload', 'watch']);
	});

	grunt.registerTask('server', function(target) {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run([ target ? ('serve:' + target) : 'serve']);
	});

	grunt.registerTask('test', function(target) {
		if (target !== 'watch') {
			grunt.task.run(['clean:server', 'concurrent:test', 'autoprefixer']);
		}

		grunt.task.run(['connect:test', 'jasmine']);
	});

	grunt.registerTask('build', ['clean:dist', 'useminPrepare', 'concurrent:dist', 'autoprefixer', 'concat', 'cssmin', 'uglify', 'copy:dist', 'modernizr', 'rev', 'usemin', 'htmlmin']);

	grunt.registerTask('default', ['newer:jshint', 'test', 'build']);
};
