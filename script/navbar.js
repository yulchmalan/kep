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

function updateElementTransforms() {
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
}

burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');

    if (navList.classList.contains('nav-active')) {
        icon.setAttribute('href', 'images/icons.svg#close');
        topbar.classList.add("topbar-hidden");
    } else {
        icon.setAttribute('href', 'images/icons.svg#burger');
    }
    updateElementTransforms();
});

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        topbar.classList.add("topbar-hidden");
    } else {
        topbar.classList.remove("topbar-hidden");
    }
    updateElementTransforms();
    lastScrollY = window.scrollY;
  });

  const dropdowns = document.querySelectorAll('.nav-links li.dropdown');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  const initializeMobileDropdowns = () => {
      const updatedDropdowns = document.querySelectorAll('.nav-links li.dropdown');
  
      if (isTouchDevice) {
          updatedDropdowns.forEach((item) => {
              item.addEventListener('touchstart', (event) => {
                  event.stopPropagation();
  
                  const isActive = item.classList.contains("active");
  
                  updatedDropdowns.forEach((otherItem) => {
                      if (otherItem !== item) {
                          otherItem.classList.remove("active");
                      }
                  });
  
                  item.classList.toggle("active", !isActive);
              });
          });
  
          document.addEventListener('touchstart', (event) => {
              updatedDropdowns.forEach((item) => {
                  if (!item.contains(event.target)) {
                      item.classList.remove("active");
                  }
              });
          });
      }
  };
  
  let currentEventType = null;

const initializeDesktopDropdowns = () => {
    const screenWidth = window.innerWidth;
    const newEventType = screenWidth < 1024 ? 'click' : 'mouseover';

    if (currentEventType === newEventType) return;

    dropdowns.forEach((item) => {
        item.replaceWith(item.cloneNode(true));
    });

    const updatedDropdowns = document.querySelectorAll('.nav-links li.dropdown');

    updatedDropdowns.forEach((item) => {
        item.addEventListener(newEventType, () => {
            updatedDropdowns.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");

            if (newEventType === 'click') {
                document.querySelector(".topbar")?.classList.add("topbar-hidden");
                updateElementTransforms?.();
            }
        });
    });

    document.addEventListener(newEventType, (event) => {
        updatedDropdowns.forEach((item) => {
            if (!item.contains(event.target)) {
                item.classList.remove("active");
            }
        });
    });

    // Оновлення поточного типу події
    currentEventType = newEventType;
};

if (isTouchDevice) {
    initializeMobileDropdowns();
} else {
    initializeDesktopDropdowns();
    window.addEventListener("resize", () => {
        initializeDesktopDropdowns();
    });
}

