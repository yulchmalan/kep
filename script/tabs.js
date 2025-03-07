const tabsData = [
  {
    title: "Директор",
    name: "Береговський Василь Васильович",
    description:
      "Заступник директора з навчальної роботи в коледжі з 1996 року, кандидат філософських наук. Викладач-методист з 2009 року. Має досвід роботи на кафедрах ІФНТУНГ та НКЦ Національного транспортного університету в Івано-Франківську. Автор та співавтор кількох монографій і наукових статей, зокрема про технократизм в освіті ХХІ століття.",
    image: "images/berehovskij.png",
    phone: "+380 (342) 78-30-46",
    detailsLink: "pages/about/administration-details.html",
  },
  {
    title:
      "Заступник директора з навчальної роботи, кандидат філософських наук",
    name: "Малик Іван Васильович",
    description:
      "Заступник директора з навчальної роботи в коледжі з 1996 року, кандидат філософських наук. Викладач-методист з 2009 року. Має досвід роботи на кафедрах ІФНТУНГ та НКЦ Національного транспортного університету в Івано-Франківську. Автор та співавтор кількох монографій і наукових статей, зокрема про технократизм в освіті ХХІ століття.",
    image: "images/malyk.png",
    phone: "+380 (342) 78-30-46",
    detailsLink: "pages/about/administration-details.html",
  },
  {
    title: "Заступник директора з навчально-виробничої роботи",
    name: "Береговський Василь Васильович",
    description:
      "Заступник директора з навчальної роботи в коледжі з 1996 року, кандидат філософських наук. Викладач-методист з 2009 року. Має досвід роботи на кафедрах ІФНТУНГ та НКЦ Національного транспортного університету в Івано-Франківську. Автор та співавтор кількох монографій і наукових статей, зокрема про технократизм в освіті ХХІ століття.",
    image: "images/malyk.png",
    phone: "+380 (342) 78-30-46",
    detailsLink: "pages/about/administration-details.html",
  },
  {
    title: "Заступник директора з виховної роботи",
    name: "Береговський Василь Васильович",
    description:
      "Заступник директора з навчальної роботи в коледжі з 1996 року, кандидат філософських наук. Викладач-методист з 2009 року. Має досвід роботи на кафедрах ІФНТУНГ та НКЦ Національного транспортного університету в Івано-Франківську. Автор та співавтор кількох монографій і наукових статей, зокрема про технократизм в освіті ХХІ століття.",
    image: "images/malyk.png",
    phone: "+380 (342) 78-30-46",
    detailsLink: "pages/about/administration-details.html",
  },
];

const tabsContainer = document.querySelector(
  ".tabs-section .container > div:first-child"
);
const contentContainer = document.querySelector(
  ".tabs-section .container > div:last-child"
);

tabsData.forEach((tab, index) => {
  const tabButton = document.createElement("div");
  tabButton.classList.add("tab-btn");
  if (index === 0) tabButton.classList.add("active");
  tabButton.innerHTML = `<h2>${tab.title}</h2>`;
  tabsContainer.appendChild(tabButton);

  const tabContent = document.createElement("div");
  tabContent.classList.add("item");
  if (index === 0) tabContent.classList.add("active");
  tabContent.innerHTML = `
      <div class="image-wrapper">
        <img src="${tab.image}" alt="${tab.name}" />
      </div>
      <div class="text-content">
        <div>
          <h3>${tab.name}</h3>
          <p class="font-size">${tab.description}</p>
        </div>
        <div>
          <p class="font-size">Контактний номер: <a href="tel:${tab.phone}">${tab.phone}</a></p>
          <a class="btn btn-primary font-size" href="${tab.detailsLink}">
            <span>Детальніше<i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    `;
  contentContainer.appendChild(tabContent);
});

document.querySelectorAll(".tab-btn").forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active")?.classList.remove("active");
    document.querySelector(".item.active")?.classList.remove("active");
    btn.classList.add("active");
    document.querySelectorAll(".item")[idx].classList.add("active");
  });
});
