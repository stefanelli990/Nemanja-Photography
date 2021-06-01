const toggle = document.querySelector('.toggle');
const sideNav = document.querySelector('.sidenav');


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


