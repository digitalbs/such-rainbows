/**
 * Builds a new Rainbow.  A rainbow is built with different color arcs of the rainbow.
 * The curentplacement is used to calculate placement for animating the arc.
 * It contains a Draw function which does the heavy lifting.
 *
 * @param {Integer} x      X coordinate for the rainbow.
 * @param {Integer} y      Y coordinate for the rainbow.
 * @param {Integer} radius Radius of the rainbow
 */
function Rainbow(x, y, radius) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.currentPlacement = Math.PI;
}

/**
 * Draws out a new rainbow.
 * It will take an array of RGB color values based off of the rainbow and draw out a rainbow.
 *
 * @param  {Object} context 2D context of the canvas
 * @return void
 */
Rainbow.prototype.draw = function draw(context) {
	var colors = [
		"76, 0, 153",
		"51, 51, 255",
		"0, 153, 0",
		"255, 255, 0",
		"255, 128, 0",
		"255, 0, 0"
	];

	for (var i = colors.length - 1; i >= 0; i--) {
		var color = colors[i],
			diff = i * 3;

		context.strokeStyle = "rgba(" + color + ", 0.3)";
		context.lineWidth = 13;
		context.beginPath();
		context.arc(this.x, this.y, this.radius + diff, Math.PI, this.currentPlacement, false);
		context.stroke();
	}
};

