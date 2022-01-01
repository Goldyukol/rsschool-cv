const hamburger = document.querySelector(".hamburger"),
	navList = document.querySelector(".nav__list"),
	navItems = document.querySelectorAll(".nav__item"),
	hamburgerItems = document.querySelectorAll(".hamburger__item");

const closeMenu = () => {
	navList.classList.remove("nav__list-active");
	hamburgerItems.forEach((el) => {
		el.classList.remove("hamburger__item-first");
		el.classList.remove("hamburger__item-center");
		el.classList.remove("hamburger__item-last");
	});
};

hamburger.addEventListener("click", () => {
	const isOpenMenu = navList.classList.contains("nav__list-active");

	isOpenMenu
		? navList.classList.remove("nav__list-active")
		: navList.classList.add("nav__list-active");

	hamburgerItems.forEach((el, i) => {
		if (i === 0) {
			isOpenMenu
				? el.classList.remove("hamburger__item-first")
				: el.classList.add("hamburger__item-first");
		}

		if (i === 1) {
			isOpenMenu
				? el.classList.remove("hamburger__item-center")
				: el.classList.add("hamburger__item-center");
		}

		if (i === 2) {
			isOpenMenu
				? el.classList.remove("hamburger__item-last")
				: el.classList.add("hamburger__item-last");
		}
	});
});

navItems.forEach((el) => {
	el.addEventListener("click", () => {
		closeMenu();
	});
});
