'use strict';

(function() {
	/**
	 * Set necessary vars used for the scope of such rainbows.
	 *
	 */
	var canvas = document.getElementById('rainbow-canvas'),
		context = canvas.getContext('2d'),
		rect = canvas.getBoundingClientRect(),
		dogeText = document.getElementById('rainbow-doge'),
		clicks = 0,
		isDrawing = false,
		rainbows = [];


	/**
	 * Set the canvas size to full screen of window width and height.
	 *
	 * @return void
	 */
	function setCanvasSize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	/**
	 * The dogeResponse function generates a random doge response and displays it
	 * to a user when they reach a certain amount of points.
	 *
	 * @return void
	 */
	function dogeResponse() {
		var dogeSayings = [
				'Such Magic',
				'Many Rainbows',
				'Such Wonder',
				'Wow! Infinite Rainbows',
				'Much colors',
				'Many Mystical bows of rain',
				"Wow! Such Colors"
			],
			dogeIndex = Math.floor(Math.random() * dogeSayings.length);

		dogeText.innerHTML = dogeSayings[dogeIndex];
		dogeText.className = 'doge-saying doge' + dogeIndex;
	}

	/**
	 * clickTrack keeps track how many times a user clicks to build a rainbow.
	 * If a user clicks four times, they get a doge response.
	 *
	 * If any other time, the class name copy changes randomly.
	 *
	 * @return void
	 */
	function clickTrack() {
		if (clicks % 4 === 0) {
			dogeResponse();
		} else {
			dogeText.className = dogeText.innerHTML = '';
		}
	}

	/**
	 * Animates the Rainbow. This is the code that runs through currently active rainbows
	 * and increases the rainbow placement to resumble a rainbow starting from one end to the other.
	 *
	 * @return void
	 */
	function animate() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = rainbows.length - 1; i >= 0; i--) {
			var rainbow = rainbows[i];

			if (rainbow.currentPlacement < Math.PI * 2 - 0.03) {
				isDrawing = true;
				rainbow.currentPlacement += 0.1;
			} else {
				isDrawing = false;
				rainbows.splice(i, 1);
			}
			rainbow.draw(context);
		}

		if (isDrawing) {
			requestAnimationFrame(animate);
		}
	}

	/**
	 * Click event listener to run actions when a user clicks on the canvas.
	 * This method creates a new, random rainbow on every click. More rainbows you add,
	 * the more points you get.
	 */
	canvas.addEventListener('click', function(e) {
		var radius = Math.floor((Math.random() * 400) + 50),
			x = e.clientX - rect.left,
			rainbow = new Rainbow(x + radius, canvas.height, radius);

		clicks++;

		rainbows.push(rainbow);
		animate();
		document.getElementById('scoreboard__score').innerHTML = scoreboard.updateScore(); //jshint ignore:line

		clickTrack();
	}, false);

	/**
	 * On resize of the window, redraw any recently drawn rainbow, as well as reset the canvas width and height.
	 */
	window.addEventListener('resize', function() {
		setCanvasSize();
		animate();
	}, false);

	//Call setCanvasSize to set the full width and height of the canvas
	setCanvasSize();
})();
