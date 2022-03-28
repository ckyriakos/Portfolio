const navToggle = document.querySelector(".nav-toggle");
const themeToggleDark = document.querySelector(".theme-toggle-dark");
const themeToggleLight= document.querySelector(".theme-toggle-light");


const navLinks = document.querySelectorAll(".nav__link");


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});


themeToggleDark.addEventListener('click', () => {
	document.body.classList.toggle('theme-change-dark');
});

themeToggleLight.addEventListener('click', () => {
	document.body.classList.toggle('theme-change-light');
});


navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
});