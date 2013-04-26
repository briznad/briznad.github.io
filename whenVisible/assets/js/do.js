$(function() {

	// define methods
	var method = {
		randoNum: function() { // give me a random number between 100 and 400
			return Math.floor(Math.random() * 301) + 100;
		},
		runPlugin: function() {
			$('#exampleImg').whenVisible(function(el) {
				// center image within it's container

				var $container = $(el).parent('.container');
				// calculate inner container dimensions
				var containerInnerWidth = $container.width() - (parseInt($container.css('padding-left')) + parseInt($container.css('padding-right')));
				var containerInnerHeight = $container.height() - (parseInt($container.css('padding-top')) + parseInt($container.css('padding-bottom')));
				// move img
				$(el).css({
					left: parseInt((containerInnerWidth - $(el).width()) / 2),
					top: parseInt((containerInnerHeight - $(el).height()) / 2)
				});
			}, 50, 6000);
		},
		loadKitten: function() {
			$('#exampleImg').attr({
				src: 'http://placekitten.com/' + method.randoNum() + '/' + method.randoNum(),
				alt: 'ahhh, kitten'
			}).show();
		}
	};

	// register button events
	$('#runPlugin').on('click', function(e) {
		e.preventDefault();
		method.runPlugin();
	});
	$('#doBoth').on('click', function(e) {
		e.preventDefault();
		$('#exampleImg').hide();
		method.runPlugin();
		method.loadKitten();
	});
	$('#loadKitten').on('click', function(e) {
		e.preventDefault();
		method.loadKitten();
	});

});