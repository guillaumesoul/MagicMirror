const demoStepLength = 5
const stepScrollLength = 3

$(document).ready(function () {

	let demoStep = 0
	let stepScroll = 0

	initPresentation()

	$(window).on("click", function () {
		displayNextStepDemo(demoStep)
	});
});

function initPresentation() {
	$(".region").hide()
	$(".region.lower.third").show()
}

function displayNextStepDemo(demoStep) {
	(demoStep >= demoStepLength) ? demoStep = 0 : demoStep++
	displayElementDemoStep(demoStep)
	/*(stepScroll >= stepScrollLength) ? stepScroll = 0 : stepScroll++
	scrollNextSection(stepScroll)*/
}

function displayElementDemoStep(demoStep) {
	switch(demoStep) {
	case 1:
		$(".region.top").show()
		break;
	case 2:
		break;
	}
}

// single page scroll manager
// scroll height page
function scrollNextSection(stepScroll) {
	$("html, body").animate( { scrollTop: $(window).height()*stepScroll }, 1000 )
};