let valueDisplays = document.querySelectorAll(".num");
let interval = 300;
let observer;

let createObserver = () => {
  if (observer) observer.disconnect();

  let options;
  if (window.innerWidth < 600) {
    options = { root: null, threshold: 1.0 };
  } else {
    options = { root: null, threshold: 1.0 };
  }

  observer = new IntersectionObserver(startCounting, options);

  if (window.innerWidth < 600) {
    valueDisplays.forEach((num) => observer.observe(num));
  } else {
    let section = document.getElementById("bigNums");
    if (section) observer.observe(section);
  }
};

let startCounting = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let target = entry.target;

      if (target.classList.contains("num")) {
        startCount(target);
      } else {
        valueDisplays.forEach((num) => startCount(num));
      }

      observer.unobserve(target);
    }
  });
};

let startCount = (valueDisplay) => {
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
};

createObserver();

window.addEventListener("resize", createObserver);
