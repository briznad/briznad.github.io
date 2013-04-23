// define methods
var method = {
	randoNum: function() { // give me a random number between 100 and 300
		return Math.floor(Math.random() * 301) + 100;
	},
	loadPlugin: function() {
		$('imgWrapper').whenVisible(function(el) {
			var $container = $(el).parents('.container');
			$(el).css({
				top: parseInt((($container.height() - (parseInt($container.css('padding')) * 2)) - $(el).height()) / 2)
			});
		}, 100, 3000);
	},
	loadKitten: function() {
		var tempSize = method.randoNum();
		$('#imgWrapper').load('http://placekitten.com/' + tempSize + '/' + tempSize);
	}
};

// register button events
$('#loadPlugin').on('click', function(e) {
	e.preventDefault();
	method.loadPlugin();
});
$('#loadBoth').on('click', function(e) {
	e.preventDefault();
	method.loadPlugin();
	method.loadKitten();
});
$('#loadKitten').on('click', function(e) {
	e.preventDefault();
	method.loadKitten();
});