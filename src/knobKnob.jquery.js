/**
 * @name		jQuery KnobKnob plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/11/pretty-switches-css3-jquery/
 * @license		MIT License
 * Библиотека вращающегося блока звука
 */

(function ($) {

	$.fn.knobKnob = function (props) {

		let options = $.extend({
			snap: 0,
			value: 0,
			turn: function () {}
		}, props || {});

		const tpl = '<div class="content-player-volume-knob">\
						<div class="content-player-volume-top"></div>\
						<div class="content-player-volume-base"></div>\
					</div>';

		return this.each(function () {

			const el = $(this);
			el.append(tpl);

			let knob = $('.content-player-volume-knob', el),
				knobTop = knob.find('.content-player-volume-top'),
				startDeg = -1,
				currentDeg = 0,
				rotation = 0,
				lastDeg = 0,
				doc = $(document);

			if (options.value > 0 && options.value <= 359) {
				rotation = lastDeg = currentDeg = options.value;
				knobTop.css('transform', 'rotate(' + (currentDeg) + 'deg)');
				options.turn(currentDeg / 359);
			}

			knob.on('mousedown touchstart', function (e) {

				e.preventDefault();

				let offset = knob.offset();
				let center = {
					y: offset.top + knob.height() / 2,
					x: offset.left + knob.width() / 2
				};

				let a, b, deg, tmp,
					rad2deg = 180 / Math.PI;

				knob.on('mousemove.rem touchmove.rem', function (e) {

					e = (e.originalEvent.touches) ? e.originalEvent.touches[0] : e;

					a = center.y - e.pageY;
					b = center.x - e.pageX;
					deg = Math.atan2(a, b) * rad2deg;

					// we have to make sure that negative
					// angles are turned into positive:
					if (deg < 0) {
						deg = 360 + deg;
					}

					// Save the starting position of the drag
					if (startDeg == -1) {
						startDeg = deg;
					}

					// Calculating the current rotation
					tmp = Math.floor((deg - startDeg) + rotation);

					// Making sure the current rotation
					// stays between 0 and 359
					if (tmp < 0) {
						tmp = 360 + tmp;
					} else if (tmp > 359) {
						tmp = tmp % 360;
					}

					// Snapping in the off position:
					if (options.snap && tmp < options.snap) {
						tmp = 0;
					}

					// This would suggest we are at an end position;
					// we need to block further rotation.
					if (Math.abs(tmp - lastDeg) > 180) {
						return false;
					}

					currentDeg = tmp;
					lastDeg = tmp;

					knobTop.css('transform', 'rotate(' + (currentDeg) + 'deg)');
					options.turn(currentDeg / 360);
				});

				doc.on('mouseup.rem  touchend.rem', function () {
					knob.off('.rem');
					doc.off('.rem');

					// Saving the current rotation
					rotation = currentDeg;

					// Marking the starting degree as invalid
					startDeg = -1;
				});

			});
		});
	};

})(jQuery);