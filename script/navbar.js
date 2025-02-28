document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const burger = document.getElementById("burger");
  const navLinks = document.querySelector(".nav-links");

  function closeAllDropdowns(except = null) {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== except) {
        dropdown.classList.remove("open");
      }
    });
  }

  dropdowns.forEach((dropdown) => {
    const span = dropdown.querySelector("span");
    const links = dropdown.querySelectorAll("a");

    span.addEventListener("click", function (event) {
      if (window.innerWidth < 1124) {
        event.stopPropagation();
        const isOpen = dropdown.classList.contains("open");
        closeAllDropdowns(dropdown);

        if (!isOpen) {
          dropdown.classList.add("open");
        }
      }
    });

    links.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth < 1124) {
          closeAllDropdowns();
        }
      });
    });
  });

  document.addEventListener("click", function () {
    closeAllDropdowns();
  });

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("active");
  });

  //topbar
  const topbar = document.querySelector(".topbar");
  const nav = document.querySelector("nav");
  let lastScrollY = window.scrollY;
  let threshold = 2;

  window.addEventListener("scroll", function () {
    if (window.innerWidth > 1124) {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + threshold && currentScrollY > 36) {
        topbar.style.transform = "translateY(-56px)";
        nav.style.transform = "translateY(-56px)";
      } else if (lastScrollY > currentScrollY + threshold) {
        topbar.style.transform = "translateY(0)";
        nav.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    }
  });

  const searchButton = document.getElementById("search-button");
  const closeButton = document.getElementById("close-search");
  const searchOverlay = document.getElementById("search");

  searchButton.addEventListener("click", () => {
    searchOverlay.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
  });

  searchOverlay.querySelector(".overlay").addEventListener("click", () => {
    searchOverlay.classList.remove("active");
  });
});
