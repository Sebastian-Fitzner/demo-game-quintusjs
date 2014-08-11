module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true
	},
	dist: {
		files: {
			'<%= paths.dev %>/css/styles.css': '<%= paths.src %>/scss/styles.scss'
		}
	},
	ie: {
		files: {
			'<%= paths.dev %>/css/ie8.css': '<%= paths.src %>/scss/ie8.scss'
		}
	},
	docs: {
		files: {
			'<%= paths.dev %>/css/docs.css': '<%= paths.src %>/scss/docs.scss'
		}
	}
}