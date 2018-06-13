const demoStepLength = 5
const stepScrollLength = 3

const demoStepIndexTriggeringScroll = [2,4]

$(document).ready(function () {

	$("#module_2_clock").fadeOut(100 )

	let demoStep = 0
	let stepScroll = 0

	initPresentation()

	$(window).on("click", function () {
		demoStep = displayNextStepDemo(demoStep)
	});
});

function initPresentation() {
	//$(".region.top.left").hide()
	//$(".region.top.right").hide()
	//$(".region.middle.center").show()
	//$("#greeting_complement").hide()
	//$("#greeting_title").show()

	$("#greeting_complement").fadeIn(5000 )
	$("#module_2_clock").fadeIn(5000 )
}

function displayNextStepDemo(demoStep) {
	(demoStep >= demoStepLength) ? demoStep = 0 : demoStep++
	displayElementDemoStep(demoStep)
	if(demoStepIndexTriggeringScroll.includes(demoStep)) {
		var scrollStep = demoStepIndexTriggeringScroll.indexOf(demoStep)+1
		scrollNextSection(scrollStep)
	}
	return demoStep
}

function displayElementDemoStep(demoStep) {
	switch(demoStep) {
	case 1:
		$(".region.top").show()
		$(".region.middle.center").show()
		break;
	case 2:
		break;
	}
}

// single page scroll manager
// scroll height page
function scrollNextSection(scrollStep) {
	$("html, body").animate( { scrollTop: $(window).height()*scrollStep }, 1000 )
};