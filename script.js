document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle Mobile Menu
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    });

    // NOTE: Dropdowns are handled via CSS :hover for simplicity. 
    // If you need click-based dropdowns for mobile later, add logic here.
});