$(function() {

	var parseRunColor = function(colorVal) {
		if (colorVal.match(/\[/)) {
			return colorVal.replace(/'/g,'').replace(/"/g,'').replace(/\[/, '').replace(/\]/, '').split(',');
		} else {
			return colorVal;
		}
	},
	parseShowColor = function(colorVal) {
		if (!colorVal.match(/\[/)) return '\'' + colorVal + '\'';
		else return colorVal;
	},
	paintAndRun = function() {
		var tempSize = $('#optionSize').val(),
			tempColor = $('#optionColor').val();

		if (tempSize === '' || tempColor === '') {
			if (tempSize === '' && tempColor === '') {
				$('#showOptions').html('');
				$('h1').funText();
			} else if (tempColor === '') {
				$('#showOptions').html(tempSize);
				$('h1').funText(parseInt(tempSize));
			} else {
				$('#showOptions').html(parseShowColor(tempColor));
				$('h1').funText(parseRunColor(tempColor));
			}
		} else {
			$('#showOptions').html(tempSize + ', ' + parseShowColor(tempColor));
			$('h1').funText(parseInt(tempSize), parseRunColor(tempColor));
		}
		hljs.highlightBlock($('#code')[0]);
	},
	viewOption = function(e) {
		e.preventDefault();
		if ($(this).is('.color')) $('#optionColor').val($(this).text());
		else $('#optionSize').val($(this).text());
		paintAndRun();
	};

	$('#optionSize, #optionColor').on('change keyup', paintAndRun);
	$('.example-option').on('click', viewOption);

	paintAndRun();

});