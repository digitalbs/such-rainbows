'use strict';

var shell = require('gulp-shell');

module.exports = (function() {
	/**
	 * Gulp shell. Runs shell command to open node server
	 */
	gulp.task('shell', shell.task([
		'node server.js'
	]));
})();
