(function(){

var body = document.querySelector("body");

document.querySelector("#slider-radio-1")
.addEventListener('change', function(event) {
	removeBodyBackground();
	body.classList.add('body-bg-1');
});

document.querySelector("#slider-radio-2")
.addEventListener('change', function(event) {
	removeBodyBackground();
	body.classList.add('body-bg-2');
});

document.querySelector("#slider-radio-3")
.addEventListener('change', function(event) {
	removeBodyBackground();
	body.classList.add('body-bg-3');
});

function removeBodyBackground() {
	body.classList.remove('body-bg-1');
	body.classList.remove('body-bg-2');
	body.classList.remove('body-bg-3');
}

}());