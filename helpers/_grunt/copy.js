module.exports = { 
	styleguide: {
		dest: '<%= paths.dev %>/styleguide/css/',
		expand: true,
		filter: 'isFile',
		flatten: true,
		src: ['<%= paths.dev %>/css/**/*.css']
	},
	dist: {
		cwd: '<%= paths.dev %>/',
		dest: '<%= paths.dist %>',
		expand: true,
		src: ['**']
	}
	
};