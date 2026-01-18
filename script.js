document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    });

    // 2. Shrinking Navbar Logic
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        // When scrolled down more than 150px (approx "human chunk")
        if (window.scrollY > 150) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});