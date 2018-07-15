console.log("lazyLoad.js");

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});