const demoStepLength = 5
const stepScrollLength = 3

const demoStepIndexTriggeringScroll = [1,4]

$(document).ready(function () {

	$("html, body").animate({ scrollTop: 0 }, "slow");

	let demoStep = 0
	let stepScroll = 0

	setTimeout(initPresentation,1500)



	var lastScrollPosition = 0;
	window.onscroll = function() {

		var newScrollPosition = window.scrollY;
		var windowHeight = $(window).height();
		//console.log($(window).height());

		var currentSection =  Math.floor(newScrollPosition / windowHeight);

		if (newScrollPosition < lastScrollPosition){
			//console.log("upward");
			scrollNextSection('upward',currentSection);
		}else{
			//console.log("downward");
			scrollNextSection('downward',currentSection);
		}
		lastScrollPosition = newScrollPosition;
	}



});

function initPresentation() {

	$('.region.lower.third .container').css('display','block')
	$("#greeting_complement").fadeIn(3500)
	$(".module.clock").fadeIn(3500)
	$(".module.currentweather").fadeIn(3500)
	$(".module.weatherforecast").fadeIn(3500)
	$(".module.newsfeed").fadeIn(3500)
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

var scrollComplete = true;

// single page scroll manager
// scroll height page
//function scrollNextSection(scrollStep) {
function scrollNextSection(direction, currentSection) {
	//console.log(($(window).height())*(currentSection+1));
	var coef = (direction == "upward") ? -1 : 1
	var scrollTopValue = ($(window).height())*(currentSection+1)

	//console.log(scrollTopValue*coef);

	/*if(scrollComplete) {
		$("html, body").animate({
			scrollTop: scrollTopValue*coef
		},
		{
			easing: "swing",
			duration: 5000,
			progress: function() {
				scrollComplete = false;
			},
			complete: function () {
				scrollComplete = false;
			}
		});
	}*/

	/*if(direction == 'downward') {
		$("html, body").animate( { scrollTop: $(window).height() }, 1000 )
	}
	if(direction == 'upward') {
		$("html, body").animate( { scrollTop: -($(window).height()) }, 1000 )
	}*/


};