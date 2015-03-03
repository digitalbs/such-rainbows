'use strict';

var fs = require('fs'),
	tasks = fs.readdirSync('./gulp/tasks/');

global.gulp = require('gulp');

/**
 * Gulp tasks loader. Loops through the files in the Gulp tasks directory to load in gulp task
 * @param  {Object} task Gulp task in each loop is the file that we read and bring in to require them into the Gulp file
 */
tasks.forEach(function(task) {
	if (task.match(/.*\.js/)) {
		require('./tasks/' + task);
	}
});