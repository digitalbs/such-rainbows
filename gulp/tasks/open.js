'use strict';

var open = require('gulp-open');

module.exports = (function() {
	/**
	 * Gulp open. Runs open command to open app in browser
	 */
	gulp.task('open', function() {
		gulp.src('./public/index.html')
		.pipe(open('', {
			url: 'http://localhost:8000'
		}));
	});
})();
