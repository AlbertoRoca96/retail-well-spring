// Get the menu icon and navigation bar
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

// Add event listener for clicking the hamburger menu
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class to show or hide the menu
    nav.classList.toggle('active');
});
