module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('bower.json'),
		uglify: {
			options: {
				banner: '/* (c) 2015 Pedro Catré */ \n'
			},
			dist: {
				src: 'src/isoCountryFilter.js',
				dest: 'dist/isoCountryFilter.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
}
