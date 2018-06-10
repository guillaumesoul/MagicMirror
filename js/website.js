$(document).ready(function () {
	$(".region").hide();

	$(".region.lower.third").show();

	var height = $(window).height();
	console.log(height);
	var heightComplimeent = height*0.66;
	$(".region.lower").css("top",heightComplimeent+"px");

	$(".region.top").show();

	$(window).on("scroll", function () {
		console.log("scroll");
	});
});
