const nav = document.querySelector('nav');
const searchBtn = document.getElementById('search');
const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const icon = document.querySelector('.burger-icon');
const topbar = document.querySelector(".topbar");
const elements = document.querySelectorAll(".move-el");
const screenWidth = window.innerWidth;
let lastScrollY =  window.scrollY;

burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');

    if (navList.classList.contains('nav-active')) {
        icon.setAttribute('href', 'images/icons.svg#close');
        topbar.classList.add("topbar-hidden");
    } else {
        icon.setAttribute('href', 'images/icons.svg#burger');
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
            element.style.transform = `translateY(${isTopbarVisible ? "130px" : "0px"})`;
        } else if (screenWidth <= 1170) {
            element.style.transform = `translateY(${isTopbarVisible ? "160px" : "30px"})`;
        } else {
            element.style.transform = `translateY(${isTopbarVisible ? "100px" : "40px"})`;
        }
    });

    lastScrollY = window.scrollY;
  });

const dropdowns = document.querySelectorAll('.nav-links li.dropdown');

if (dropdowns) {
    dropdowns.forEach((item) => {
        item.addEventListener("click", () => {
            dropdowns.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });
}

document.addEventListener("click", (event) => {
    dropdowns.forEach((item) => {
        if (!item.contains(event.target)) {
            item.classList.remove("active");
        }
    });
});