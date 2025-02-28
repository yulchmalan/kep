document.addEventListener("DOMContentLoaded", function () {
    
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".icon");
        answer.style.display = "none";
        question.addEventListener("click", function () {

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+"; 
            } 
            else {
                document.querySelectorAll(".faq-answer").forEach(otherAnswer => {
                    otherAnswer.style.display = "none";
                });

                document.querySelectorAll(".faq-item .icon").forEach(otherIcon => {
                    otherIcon.textContent = "+";
                });

                answer.style.display = "block";
                icon.textContent = "–";  
            }
        });
    });
});