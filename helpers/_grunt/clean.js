module.exports = {
	dist: [
		'<%= paths.dist %>/**'
	],
    dev: [
        '<%= paths.dev %>/**/*.{html,xml,txt}',
		'<%= paths.dev %>/styleguide/**/*',
        '<%= paths.dev %>/css/**/*',
        '<%= paths.dev %>/js/**/*',
        '<%= paths.dev %>/img/**/*'] ,
	grunticon: [
        '<%= paths.src %>/scss/icons/*.{html,js,txt}'
    ]
};