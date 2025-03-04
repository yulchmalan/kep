document.addEventListener("DOMContentLoaded", function () {
    const allItems = document.querySelectorAll(".accordion-item, .faq-item");

    if (allItems.length > 0) {
        allItems.forEach((item) => {
            item.addEventListener("click", () => {
                allItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                    }
                });
                item.classList.toggle("active");
            });
        });
    }
});
