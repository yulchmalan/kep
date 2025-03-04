document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let lastScrollTop = window.scrollY;

    const observer = new IntersectionObserver(entries => {
        let currentScrollTop = window.scrollY;
        let scrollingDown = currentScrollTop > lastScrollTop;

        entries.forEach(entry => {
            const card = entry.target;

            if (scrollingDown) {
                if (entry.intersectionRatio >= 0.5) {
                    card.classList.add("show");
                    card.classList.remove("hide");
                }
            } 
            else {
                if (entry.intersectionRatio < 0.5) {
                    card.classList.add("hide");
                    card.classList.remove("show");
                }
            }
        });

        lastScrollTop = currentScrollTop;
    }, { threshold: [0.5, 0.5] }); 

    cards.forEach(card => observer.observe(card));
});
