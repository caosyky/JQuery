$(document).ready(function() {
	$(".onclick1").click(function(event) {
		$('.themenu-mobi').css('transform', 'translate(0, 0)');
		$('.themenu-mobi').css('-webkit-transform', 'translate(0, 0)');
	});
	$(".onclick2").click(function(event) {
		$('.themenu-mobi').css('transform', 'translate(100%, 0)');
		$('.themenu-mobi').css('-webkit-transform', 'translate(100%, 0)');
	});
});