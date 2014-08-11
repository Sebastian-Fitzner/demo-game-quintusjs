module.exports = {
    syncing: {
        tasks: [
            'sync'
        ],
        options: {
            logConcurrentOutput: true
        }
    },
    build: {
        tasks: [
            'assemble',
            'copy:styleguide',
            'styleguide',
            'beauty-scss'
        ],
        options: {
            logConcurrentOutput: true,
            limit: 5
        }
	}
};