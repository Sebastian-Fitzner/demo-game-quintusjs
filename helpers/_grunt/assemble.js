module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: '<%= paths.src %>/data/**/*.{json,yml}',
		helpers: '<%= paths.src %>/templates/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templates/layouts/',
		layout: 'tpl_default.hbs',
		partials: '<%= paths.src %>/templates/partials/**/*.hbs'
	},
	pages: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templates/pages/',
			dest: '<%= paths.dev %>/',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
		}]
	},
	ajax: {
		options: {
			layout: 'tpl_ajax.hbs'
		},
		files: [{
			cwd: '<%= paths.src %>/templates/ajax/',
			dest: '<%= paths.dev %>/ajax-content',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
		}]
	},
	docs: {
		files: [
		{
			cwd: '<%= paths.src %>/templates/docs/',
			dest: '<%= paths.dev %>/docs',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
			}
		]
	}
};