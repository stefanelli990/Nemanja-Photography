//hamburger slide
const toggle = document.querySelector('.navigation__toggle');
const hamburgerMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const landingPage = document.querySelector('.landing-page');
const navLinks = document.querySelectorAll('.nav-link');

toggle.addEventListener('click', () => {
    body.classList.toggle('body-scroll');
    toggle.classList.toggle('change');
    landingPage.classList.toggle('landing-page-active');
    hamburgerMenu.classList.toggle('hamburger-active');
});

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        body.classList.remove('body-scroll');
        toggle.classList.remove('change');
        landingPage.classList.remove('landing-page-active');
        hamburgerMenu.classList.remove('hamburger-active');
    });
});



//gallery
const images = document.querySelectorAll('.images');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-image');


images.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('modal-active');


        //dynamicaly change image
        const imgSrc = image.getAttribute('src');
        modalImg.src = `${imgSrc}`;
    });
});

// close image 
modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('modal-active');
    }
});