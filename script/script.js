document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#news .card");
    const button = document.querySelector("#news .btn-transparent");
    const newsSection = document.querySelector("#news");

    let visibleCount = window.innerWidth < 1170 ? 2 : 3;
    const incrementSmallScreen = 2; 
    const incrementLargeScreen = 3; 

    const updateVisibility = () => {
        cards.forEach((card, index) => {
            if (index < visibleCount) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        if (visibleCount >= cards.length) {
            button.textContent = "Приховати";
        } else {
            button.textContent = "Показати ще";
        }
    };

    if (button) {
        button.addEventListener("click", () => {
            if (visibleCount >= cards.length) {
                visibleCount = window.innerWidth < 1170 ? 2 : 3;
                const sectionTop = newsSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: sectionTop - 150, behavior: "smooth" });
            } else {
                visibleCount += window.innerWidth < 1170 ? incrementSmallScreen : incrementLargeScreen;
            }
            updateVisibility();
        });
    
        updateVisibility();
    
        window.addEventListener("resize", () => {
            const previousVisibleCount = visibleCount;
            visibleCount = window.innerWidth < 600 ? Math.min(previousVisibleCount, 2) : Math.min(previousVisibleCount, 3);
            updateVisibility();
        });
    }

    const scrollers = document.querySelectorAll(".slide");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".wrapper");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});
