'use strict';

// ------ Header --------
var navBar = document.querySelector('header');
// var headerScroll = document.querySelector("header.sec-header");
var headerY = 50;

window.addEventListener('scroll', function () {
	var haederTop = window.scrollY;
	if (haederTop > headerY) {
		navBar.classList.add('active');
	} else {
		navBar.classList.remove('active');
	}
});
