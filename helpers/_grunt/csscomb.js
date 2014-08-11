module.exports = {
	dist: {
		options: {
			config: '<%= paths.helper %>/csscomb/config.json'
		},
		expand: true,
		cwd: '<%= paths.src %>/scss/',
		src: ['**/*.scss'],
		dest: '<%= paths.src %>/scss/'
	}
};