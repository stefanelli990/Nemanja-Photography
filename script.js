const toggle = document.querySelector('.navigation__toggle');
const hamburgerMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const landingPage = document.querySelector('.landing-page');


toggle.addEventListener('click', () => {
    body.classList.toggle('body-scroll');
    toggle.classList.toggle('change');
    landingPage.classList.toggle('landing-page-active');
    hamburgerMenu.classList.toggle('hamburger-active')
});