module.exports = {
	js: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/js',
				src: '**/*',
				dest: '<%= paths.dev %>/js'
			}
		]
	},
	assets: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/assets',
				src: '**/{,*/}*',
				dest: '<%= paths.dev %>'
			}
		]
    },
	highlightjs: {
		files: [
			// includes files within path and its sub-directories
			{
			cwd: '<%= paths.src %>/bower_components/highlightjs',
			src: 'highlight.pack.js',
			dest: '<%= paths.dev %>/bower_components'
			}
		]
	},
    jquery: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower_components/jquery/dist',
                src: 'jquery.js',
                dest: '<%= paths.dev %>/bower_components/jquery/dist'
            }
        ]
    }
};