'use strict';

$('.testimonials-slider').slick({
	centerMode: true,
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	dots:true,
	autoplay: true,
    autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });




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
