"use strict";

const closeBtn = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const scrollTop = document.querySelector('.scrollTop');
const headerSection = document.querySelector('header');
const sideMenu = document.querySelector('.hamburger-menu');

const fadeIns = document.querySelectorAll('.fade-in');

const bannerSection = document.getElementById('banner');


// ----- Event Listeners -------------------------------------------------------------------

scrollTop.addEventListener('click', () => {

	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

sideMenu.addEventListener('click', () => sidebar.classList.add('open'));

closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));


// ----- Intersection Observer -------------------------------------------------------------------

const options = {
	threshold: 1
};

const appearOptions = {
	threshold: 0.7,
	rootMargin: '-100px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => !entry.isIntersecting ? scrollTop.classList.remove('scaleDown') : scrollTop.classList.add('scaleDown'));
}, options);

const headerObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => !entry.isIntersecting ? headerSection.classList.add('sticky') : headerSection.classList.remove('sticky'));
}, options);

const appearObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {

		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearObserver.unobserve(entry.target);
		}
	});
}, appearOptions);

scrollObserver.observe(bannerSection);
headerObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => {
	appearObserver.observe(fadeIn);
});

// ----- Swiper -------------------------------------------------------------------

const swiperTestimonial = new Swiper('#testimonial-swiper', {

	init: true,
	loop: true,
	speed: 1500,
	spaceBetween: 30,
	loopedSlides: 50,
	grabCursor: true,
	mousewheel: false,
	centeredSlides: false,
	breakpointsInverse: true,
	loopFillGroupWithBlank: false,

	breakpoints: {
		576: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		}
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});


const swiperPartners = new Swiper('#partner-swiper', {

	init: true,
	loop: true,
	speed: 1500,
	spaceBetween: 30,
	loopedSlides: 50,
	grabCursor: true,
	centeredSlides: false,
	breakpointsInverse: true,
	loopFillGroupWithBlank: false,

	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		500: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 50,
		}
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});