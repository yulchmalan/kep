function generateContent(person) {
  const contentDiv = document.getElementById("textContent");
  contentDiv.innerHTML = `
      <h1>${person.title}</h1>
      <p>${person.position}</p>
      <p><b>Науковий ступінь:</b> ${person.degree}</p>
      <p><b>Освіта:</b> ${person.education}</p>
  `;

  if (person.email && person.email.trim() !== "") {
    contentDiv.innerHTML += `<p><b>E-mail:</b> <a href="mailto:${person.email}">${person.email}</a></p>`;
  }

  contentDiv.innerHTML += `<p>${person.working_since}</p>`;

  const imageWrapper = document.querySelector(".image-wrapper img");
  imageWrapper.src = person.image;
  imageWrapper.alt = `${person.title}`;

  const aboutParagraphs = document.getElementById("paragraphs");
  person.sections.forEach((section) => {
    const sectionHTML = `
        <h2>${section.title}</h2>
        <p>${section.content}</p>
    `;
    aboutParagraphs.innerHTML += sectionHTML;
  });

  const menuDiv = document.querySelector("#menu");
  const ul = menuDiv.querySelector("ul");

  person.related.forEach((item) => {
    const listItemHTML = `
            <li>
                <a href="${item.link}">${item.name}</a>
            </li>
        `;
    ul.innerHTML += listItemHTML;
  });

  const quoteSection = document.querySelector(".quote-section .quote");
  quoteSection.innerHTML = `
        <i class="fa-solid fa-quote-left"></i>
        ${person.quote}
        <i class="fa-solid fa-quote-right"></i>
    `;
}

fetch("https://yulchmalan.github.io/kep/data/administration.json")
  .then((response) => response.json())
  .then((data) => {
    const urlParams = new URLSearchParams(window.location.search);
    const personId = urlParams.get("id");

    const person = data[personId];

    if (person) {
      generateContent(person);
    } else {
      console.log("Особу не знайдено");
    }
  })
  .catch((error) => console.error("Помилка при завантаженні даних:", error));