/*
   JavaScript for info graphic from
   http://www.theglobeandmail.com/technology/why-globe-readers-did-or-didnt-make-the-iphone-switch/article4537560/
   
   Uses Waypoints from
   http://imakewebthings.com/jquery-waypoints/
*/

$('document').ready(function () {
	$('#loading-placeholder').hide();
	$('#done-loading').fadeIn(function () {
		$(window).one('scroll', function () {
			$('.trigger').waypoint(function (e, d) {
				animateMe($(this), d);
			}, {
				offset: '50%'
			})
		});

		function animateMe(obj, d) {
			whichObj = parseInt(obj.attr('rel'));
			if (d === 'down') {
				d = true
			} else {
				d = false
			};
			if (!obj.hasClass('animated') && d) {
				obj.addClass('animated');
				switch (whichObj) {
				case 1:
					if (d) {
						var i = 0;
						var int = setInterval(function () {
							i++;
							obj.find('#num' + i + ' .starter').fadeOut(100, function () {
								obj.find('#num' + i + ' .ender').fadeIn();
							})
							if (i > 4) {
								clearInterval(int)
								$('#readers-responded p').fadeIn();
							}
						}, 150);
					}
					break;
				case 2:
					if (d) {
						$('#part2-num2').animate({
							'left': '181px'
						}, 800, function () {
							var j = 0;
							var int2 = setInterval(function () {
								j++;
								obj.find('#part2-num' + j + ' img').fadeIn()
								if (j > 4) clearInterval(int2);
							}, 100);
						})
					}
					break;
				case 3:
					if (d) {
						$('#part3 .trigger .slidein').animate({
							'marginTop': 4
						}, 500, function () {
							$('#part3-note').fadeIn();
						});
					}
					break;
				case 6:
					if (d) {
						$('#part6 .trigger .slidein').animate({
							'marginTop': 0
						}, 500);
					}
					break;
				case 8:
					var m = 0;
					var int5 = setInterval(function () {
						m = m + 1;
						$('#switchbubble' + m).fadeIn(150);
						if (m > 10) {
							clearInterval(int5);
						}
					}, 150)
					break;
				case 9:
					if (d) {
						var k = 0;
						var int3 = setInterval(function () {
							k = k + 1;
							if (k != 1) {
								$('#part8-num' + k).fadeIn(100);
							}
							if (k > 10) {
								clearInterval(int3);
							}
						}, 150)
					}
					break;
				case 7:
					if (d) {
						var l = 0;
						var int4 = setInterval(function () {
							l++;
							$('#bubble' + l).find('.bubble-lower').fadeIn(50).animate({
								'marginTop': '-10px'
							}, 50, function () {
								$('#bubble' + l).find('.bubble-upper').fadeIn(80);
							})
							if (l > 9) clearInterval(int4);
						}, 150)
					}
					break;
				default:
					break;
				}
			}
		}
	})
})