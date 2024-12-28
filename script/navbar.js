const nav = document.querySelector('nav');
const searchBtn = document.getElementById('search');
const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const icon = document.querySelector('.burger-icon');

burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');

    if (navList.classList.contains('nav-active')) {
        icon.setAttribute('href', 'images/icons.svg#close');
    } else {
        icon.setAttribute('href', 'images/icons.svg#burger');
    }
});