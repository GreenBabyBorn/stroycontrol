const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLinks => {

		menuLinks.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;

		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;


			for (let i = 0; i < menuLinks.length; i++) {
				menuLinks[i].classList.remove('_active');
			}

			this.classList.add('_active');

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}

	}

}


const footerLinks = document.querySelectorAll('.footer__item-link[data-goto]');

if (footerLinks.length > 0) {
	footerLinks.forEach(footerLinks => {

		footerLinks.addEventListener("click", onFooterLinkClick);
	});

	function onFooterLinkClick(e) {
		const menuLink = e.target;

		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}

	}

}




// Слайдер-Swiper
new Swiper('.comments__slider-container', {

	loop: true,
	speed: 1000,

	autoplay: {
		delay: 2000,
		disableOnInteraction: true,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}

});
// Слайдер-Swiper