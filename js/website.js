const demoStepLength = 5
const stepScrollLength = 3

const demoStepIndexTriggeringScroll = [1,4]

$(document).ready(function () {

	$("html, body").animate({ scrollTop: 0 }, "slow");

	let demoStep = 0
	let stepScroll = 0

	//initPresentation()
	setTimeout(initPresentation,4000)

	$(window).on("click", function () {
		demoStep = displayNextStepDemo(demoStep)
	});


	var waypoint = new Waypoint({
		//element: $('#step2_container'),
		element: $('body'),
		handler: function(direction) {
			//alert(' hit')
			console.log(direction);
		}
	})


});

function initPresentation() {

	$('.region.lower.third .container').css('display','block')
	$("#greeting_complement").fadeIn(5000 )
	$(".module.clock").fadeIn(5000 )
	$(".module.currentweather").fadeIn(5000 )
	$(".module.weatherforecast").fadeIn(5000 )
	//$(".module.newsfeed").fadeIn(5000 )
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