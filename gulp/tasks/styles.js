'use strict';

var sass = require('gulp-sass');

module.exports = (function() {
	/**
	 * Gulp sass. Compiles sass into CSS and bundles it for distribution
	 */
	gulp.task('sass', function() {
		gulp.src([
				'./public/sass/*.scss',
				'./public/sass/**/*.scss'
			])
			.pipe(sass())
			.pipe(gulp.dest('./public/assets/css'));
	});

	/*
	 * Setup watch for Sass changes
	 */
	gulp.watch('./public/sass/**/*.scss', ['sass']);
})();
