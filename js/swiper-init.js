var newsSlider = new Swiper('.news-slider', {
	containerModifierClass: 'news-slider',
	wrapperClass: 'news-slider-wrapper',
	slideClass: 'news-slide',
	slideActiveClass: 'news-slide-active',
	slideNextClass: 'news-slide-next',
	slidesPerView: 4,
	spaceBetween: 15,
	setWrapperSize: true,
	width: 1133,
	height: 172,
	loop: true,
	autoplay: {
		delay: 4000,
	}
});

var sharesSlider = new Swiper('.shares-slider', {
	containerModifierClass: 'shares-slider',
	wrapperClass: 'shares-slider-wrapper',
	slideClass: 'shares-slide',
	slideActiveClass: 'shares-slide-active',
	slideNextClass: 'shares-slide-next',
	slidesPerView: 3,
	loop: true
});

var birthdaysSlider = new Swiper('.birthdays-slider', {
	containerModifierClass: 'birthdays-slider',
	wrapperClass: 'birthdays-slider__wrapper',
	slideClass: 'birthdays__slide',
	slideActiveClass: 'birthdays__slide-active',
	slideNextClass: 'birthdays__slide-next',
	slidesPerView: 4,
});

var newWorkersSlider = new Swiper('.new-workers-slider', {
	containerModifierClass: 'new-workers-slider',
	wrapperClass: 'new-workers__slider-wrapper',
	slideClass: 'new-workers__slide',
	slideActiveClass: 'new-workers__slide-active',
	slideNextClass: 'new-workers__slide-next',
	slidesPerView: 11,
	loop: true,
});