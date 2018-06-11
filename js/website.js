const nbScrollPage = 3

$(document).ready(function () {
	$(".region").hide()

	/*$(".region.lower.third").show()

	var height = $(window).height()
	var heightComplimeent = height*0.66
	$(".region.lower").css("top",heightComplimeent+"px")

	$(".region.top").show()*/

	let stepScroll = 0

	//

	$(window).on("click", function () {
		(stepScroll >= nbScrollPage) ? stepScroll = 0 : stepScroll++
		displayNextStep(stepScroll)
	});
});

// single page scroll manager
// scroll height page
function displayNextStep(stepScroll) {
	$("html, body").animate( { scrollTop: $(window).height()*stepScroll }, 1000 )
};