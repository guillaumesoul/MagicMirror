const demoStepLength = 5
const stepScrollLength = 3

const demoStepIndexTriggeringScroll = [1,4]

$(document).ready(function () {


	let demoStep = 0
	let stepScroll = 0

	//initPresentation()
	setTimeout(initPresentation,5000)

	$(window).on("click", function () {
		demoStep = displayNextStepDemo(demoStep)
	});

	/*$(window).on("scroll", function () {
		console.log("scroll");
		var actualPosition = $(window).css()
	});*/


	var waypoint = new Waypoint({
		element: document.getElementById('step2_container'),
		handler: function(direction) {
			//alert(' hit')
			console.log(direction);
		}
	})


});

function initPresentation() {

	$("#greeting_complement").fadeIn(5000 )
	$("#module_2_clock").fadeIn(5000 )
	$("#module_4_currentweather").fadeIn(5000 )
	$("#module_5_weatherforecast").fadeIn(5000 )
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