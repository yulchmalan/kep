document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("#news .card");
    const button = document.querySelector("#news .btn-transparent");
  
    let visibleCount = 3; 
  
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
  
    button.addEventListener("click", () => {
      if (visibleCount >= cards.length) {
        visibleCount = 3; 
      } else {
        visibleCount += 3; 
      }
      updateVisibility();
    });
  
    updateVisibility();
  });
  