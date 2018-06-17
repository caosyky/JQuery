$(document).ready(function() {
	$(".noidung").slideUp();
	$(".motkhoi h3").click(function(event) {
		/* Act on the event */
		$(".noidung").slideUp();//moi khi click cac the con lai thu lai noi dung
		$(".motkhoi h3").removeClass("doimau");//mau tro ve mau xanh duong khi click the khac
		$(this).next(".noidung").slideToggle();
		$(this).toggleClass("doimau");
	});
});