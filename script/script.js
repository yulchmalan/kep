const newsSection = document.getElementById("news");
const moreNews = document.querySelector("#news .btn-transparent");

moreNews.addEventListener("click", () => {
    newsSection.classList.toggle('showMore');
    if (newsSection.classList.contains('showMore')) {
        moreNews.textContent = "Приховати";
    } else {
        moreNews.textContent = "Показати ще";
    }
});