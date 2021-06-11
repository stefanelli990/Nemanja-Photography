const toggle = document.querySelector('.toggle');
const sideNav = document.querySelector('.sidenav');
const loader = document.querySelector('.loader');


toggle.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    toggle.classList.toggle('change');
});

//glightbox
const lightbox = GLightbox({
    zoomable: false,
    openEffect: 'fade',
    closeEffect: 'fade'
    
});


setTimeout(() => {
    loader.classList.add('active');
    body.style.overflowY = 'visible';
}, 3000);

