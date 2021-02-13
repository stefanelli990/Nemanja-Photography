const toggle = document.querySelector('.navigation__toggle');
const hamburgerMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const landingPage = document.querySelector('.landing-page');
const navLinks = document.querySelectorAll('.nav-link');


//hamburger menu slide
toggle.addEventListener('click', () => {
    body.classList.toggle('body-scroll');
    toggle.classList.toggle('change');
    landingPage.classList.toggle('landing-page-active');
    hamburgerMenu.classList.toggle('hamburger-active');
});

//close hamburger when clicks on hamburger navlinks
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        body.classList.remove('body-scroll');
        toggle.classList.remove('change');
        landingPage.classList.remove('landing-page-active');
        hamburgerMenu.classList.remove('hamburger-active');
    });
});

//prevent hamburger active when scrolls down at bigger window
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0) {
        body.classList.remove('body-scroll');
        toggle.classList.remove('change');
        landingPage.classList.remove('landing-page-active');
        hamburgerMenu.classList.remove('hamburger-active');
    } 
});


//swiper js

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });



