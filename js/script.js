"use strict";

const swiperTestimonial = new Swiper('#testimonial-swiper', {

	init: true,
	loop: true,
	speed: 1500,
	keyboard: true,
	spaceBetween: 30,
	loopedSlides: 50,
	slidesPerView: 3,
	grabCursor: true,
	centeredSlides: true,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});

const swiperPartners = new Swiper('#partner-swiper', {

	init: true,
	loop: true,
	speed: 1500,
	keyboard: true,
	spaceBetween: 30,
	loopedSlides: 50,
	slidesPerView: 5,
	grabCursor: true,
	centeredSlides: true,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});