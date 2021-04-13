const toggle = document.querySelector('.navigation__toggle');
const close = document.querySelector('.hamburger__close');
const hamburgerMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const landingPage = document.querySelector('.landing-page');
const navLinks = document.querySelectorAll('.nav-link');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.navigation__logo');


//hamburger menu open
toggle.addEventListener('click', () => {
    body.classList.add('body-scroll');
    hamburgerMenu.classList.add('hamburger-active');
});

//hamburger close
close.addEventListener('click', () => {
    body.classList.remove('body-scroll');
    hamburgerMenu.classList.remove('hamburger-active');
})

//close hamburger when clicks on hamburger navlinks
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        body.classList.remove('body-scroll');
      
        hamburgerMenu.classList.remove('hamburger-active');
    });
});

//prevent hamburger active when scrolls down at bigger window
// window.addEventListener('scroll', () => {
//     if(window.pageYOffset > 0) {
//         body.classList.remove('body-scroll');
//         toggle.classList.remove('change');
//         landingPage.classList.remove('landing-page-active');
//         hamburgerMenu.classList.remove('hamburger-active');
//     } 
// });

// navigation animation 
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 500) {
        navigation.classList.add('navigation-animation');
        logo.firstElementChild.setAttribute('src', 'images/logo-black.svg');
        

    } else {
        navigation.classList.remove('navigation-animation');
        logo.firstElementChild.setAttribute('src', 'images/logo-white.svg');
    }
});

//glightbox
const lightbox = GLightbox({
    zoomable: false,
    openEffect: 'fade',
    closeEffect: 'fade'
});


