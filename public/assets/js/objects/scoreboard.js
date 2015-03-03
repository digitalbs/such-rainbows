'use strict';

/**
 * Scoreboard will generate a new scoreboard.
 * Currently has one method, which updates the score

 * @return {scoreboard}  Returns a scoreboard object with a method to update the current score
 */
var scoreboard = (function scoreboard() { //jshint ignore:line
	var score = 0;

	function _addToScore() {
		score += Math.floor(10);
		return score;
	}

	return {
		updateScore: _addToScore
	};

})();
