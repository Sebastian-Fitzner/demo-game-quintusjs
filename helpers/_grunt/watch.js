module.exports = {
	js: {
		files: '<%= paths.src %>/js/**/*.js',
		tasks: 'sync:js'
	},
	assets: {
		files: '<%= paths.src %>/assets/**/*',
		tasks: 'sync:assets'
	},
	globbing: {
		options: {
			event: ['added', 'deleted']
		},
		files: [
			'<%= paths.helper %>/_grunt/fileindex.js',
			'<%= paths.src %>/scss/**/*.scss',
			'!<%= paths.src %>/scss/_all.scss'
		],
		tasks: 'fileindex:libsassGlobbing'
	},
	fileindex: {
		files: [
			'<%= paths.helper %>/_grunt/fileindex.js'
		],
		tasks: 'fileindex:libsassGlobbing'
	},
	scss: {
		files: '<%= paths.src %>/scss/**/*',
		tasks: 'sass:dist',
		options: {
			spawn: false
		}
	},
	scssDocs: {
		files: '<%= paths.src %>/scss/docs/*',
		tasks: 'sass:docs',
		options: {
			spawn: false
		}
	},
	templates: {
		files: ['<%= paths.src %>/{data,templates/layouts,templates/partials}/**/{,*/}*.{md,hbs,yml,json}'],
		tasks: ['newer:assemble'],
		options: {
			spawn: false
		}
	},
	pages: {
		files: ['<%= paths.src %>/templates/pages/**/{,*/}*.hbs'],
		tasks: ['assemble:pages'],
		options: {
			spawn: false
		}
	},
	docs: {
		files: ['<%= paths.src %>/templates/docs/**/{,*/}*.hbs'],
		tasks: ['assemble:docs'],
		options: {
			spawn: false
		}
	},
	ajax: {
		files: ['<%= paths.src %>/templates/ajax/**/{,*/}*.hbs'],
		tasks: ['assemble:ajax'],
		options: {
			spawn: false
		}
	}
};