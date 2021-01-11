const toggle = document.querySelector('.navigation__toggle');
const hamburgerMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const landingPage = document.querySelector('.landing-page');
const navLinks = document.querySelectorAll('.nav-link');
const images = document.querySelectorAll('.overlay');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-image');

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


//gallery image open
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('modal-active');
        body.classList.add('disable-scroll-images');

        //dynamicaly change image
        const imgSrc = image.previousElementSibling.getAttribute('src');
        modalImg.src = `${imgSrc}`;
    });
});

// close image 
modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('modal-active');
        body.classList.remove('disable-scroll-images');
        
    }
});



