// js/main.js – RESPONSIVE LEFT SLIDING MENU
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');

function openMenu() {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    hamburger.classList.add('active');
}

function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
}

// Open menu when hamburger clicked
hamburger.addEventListener('click', openMenu);

// Close menu when close button or overlay clicked
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close menu when clicking any link
document.querySelectorAll('.side-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});