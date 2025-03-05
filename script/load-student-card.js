document.addEventListener("DOMContentLoaded", function () {
    fetch("../data/students.json") 
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("students-container");

            data.forEach(student => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <img src="${student.image}" alt="Student">
                    <div class="card-content">
                        <h3>${student.name}</h3>
                        <div class="decoration"></div>
                        <div class="sub-text-group">
                            <p>${student.position}</p>
                            <p>Група: ${student.group}</p>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Помилка завантаження JSON:", error));
});