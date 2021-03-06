(function(){

var slider = document.querySelector('.slider');
if (slider) {
	slider.querySelector("#slider-radio-1")
	.addEventListener('change', function(event) {
		removeBodyBackground();
		document.body.classList.add('body-bg-1');
	});

	slider.querySelector("#slider-radio-2")
	.addEventListener('change', function(event) {
		removeBodyBackground();
		document.body.classList.add('body-bg-2');
	});

	slider.querySelector("#slider-radio-3")
	.addEventListener('change', function(event) {
		removeBodyBackground();
		document.body.classList.add('body-bg-3');
	});

	function removeBodyBackground() {
		document.body.classList.remove('body-bg-1');
		document.body.classList.remove('body-bg-2');
		document.body.classList.remove('body-bg-3');
	}
}

var screenOverlay 	= document.querySelector('.screen-overlay');
var closeButton 		= screenOverlay.querySelector('.close-button');
var btnsFeedbackForm = document.querySelectorAll('.btn-feedback-form');

for (var i = 0; i < btnsFeedbackForm.length; ++i) {
	btnsFeedbackForm[i].addEventListener('click', function(event) {
		event.preventDefault();
		fadeIn(screenOverlay, 0.5);
	});
}

if (closeButton) {
	closeButton.addEventListener('click', function(event) {
		event.preventDefault();
		fadeOut(screenOverlay, 0.5);
	});
}

function fadeIn(elem, duration) {
	if (isVisible(elem))
		return;

	elem.style.opacity = "0"
	elem.style.transition = "opacity " + duration + "s"
	elem.style.display = "block";
	setTimeout(
		function() {
			elem.style.opacity = "1"
		},
		0
	);
}

function fadeOut(elem, duration) {
	if (!isVisible(elem))
		return;

	elem.style.transition = "opacity " + duration + "s";
	elem.style.opacity = "0";
	setTimeout(
		function() {
			elem.style.display = "none";
		},
		duration * 1000
	);
}

function isVisible(element) {
	return element.offsetWidth > 0 && element.offsetHeight > 0
}

}());