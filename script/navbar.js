const nav = document.querySelector('nav');
const searchBtn = document.getElementById('search');
const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const icon = document.querySelector('.burger-icon');
const topbar = document.querySelector(".topbar");
const elements = document.querySelectorAll(".margin-top");
const screenWidth = window.innerWidth;
let lastScrollY =  window.scrollY;

burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');

    if (navList.classList.contains('nav-active')) {
        icon.setAttribute('href', 'images/icons.svg#close');
        topbar.classList.add("topbar-hidden");
    } else {
        icon.setAttribute('href', 'images/icons.svg#burger');
        topbar.classList.remove("topbar-hidden");
    }
});

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        topbar.classList.add("topbar-hidden");
    } else {
        topbar.classList.remove("topbar-hidden");
    }

    const isTopbarVisible = !topbar.classList.contains("topbar-hidden");

    elements.forEach(element => {
        if (screenWidth <= 1024) {
            element.style.marginTop = isTopbarVisible ? "130px" : "0px";
        } else if (screenWidth <= 1170) {
            element.style.marginTop = isTopbarVisible ? "160px" : "30px";
        } else {
            element.style.marginTop = isTopbarVisible ? "100px" : "40px";
        }
    });

    lastScrollY = window.scrollY;
  });