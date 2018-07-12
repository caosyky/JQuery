$(document).ready(function() {
	$(".onclick1").click(function(event) {
		$(".onclick1").hide(100);
		$(".onclick2").show(500);
		$('.themenu-mobi').css('transform', 'translate(0, 0)');
		$('.themenu-mobi').css('-webkit-transform', 'translate(0, 0)');
	});
	$(".onclick2").click(function(event) {
		$(".onclick2").hide(100);
		$(".onclick1").show(500);
		$('.themenu-mobi').css('transform', 'translate(100%, 0)');
		$('.themenu-mobi').css('-webkit-transform', 'translate(100%, 0)');
	});
});