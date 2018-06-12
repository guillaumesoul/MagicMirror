const demoStepLength = 5
const stepScrollLength = 3

const demoStepIndexTriggeringScroll = [2,4]

$(document).ready(function () {

	let demoStep = 0
	let stepScroll = 0

	initPresentation()

	$(window).on("click", function () {
        demoStep = displayNextStepDemo(demoStep)
	});
});

function initPresentation() {
	$(".region").hide()
	$(".region.lower.third").show()
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