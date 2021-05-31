const toggle = document.querySelector('.toggle');
const sideNav = document.querySelector('.sidenav');


toggle.addEventListener('click', () => {
    sideNav.classList.toggle('active');
   
});

//glightbox
const lightbox = GLightbox({
    zoomable: false,
    openEffect: 'fade',
    closeEffect: 'fade'
    
});


