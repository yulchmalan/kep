const topbar = document.querySelector(".topbar");
let lastScrollY =  window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        topbar.classList.add("topbar-hidden");
    } else {
        topbar.classList.remove("topbar-hidden");
    }

    lastScrollY = window.scrollY;
  });