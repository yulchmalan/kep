let valueDisplays = document.querySelectorAll(".num");
let interval = 300;

let observerOptions = {
  root: null, 
  threshold: 1.0, 
};

let startCounting = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));

        let step = 1;
        if (endValue > 1000) {
          step = 45;
        } else if (endValue > 300) {
          step = 5;
        }

        let duration = Math.floor(interval / (endValue / step));
        let counter = setInterval(function () {
          startValue += step;
          if (startValue >= endValue) {
            valueDisplay.textContent = endValue; 
            clearInterval(counter);
          } else {
            valueDisplay.textContent = startValue;
          }
        }, duration);
      });

      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(startCounting, observerOptions);

let section = document.getElementById("bigNums");
if (section) {
  observer.observe(section);
}
