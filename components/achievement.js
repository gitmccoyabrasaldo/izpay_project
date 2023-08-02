// FOR UP COUNTER numbers
let valueDisplay = document.querySelectorAll(".number");

let interval = 4000;

valueDisplay.forEach((valueDisplay) => {
  let startVal = 0;
  let endVal = parseInt(valueDisplay.getAttribute("data-val"));
  // console.log(endVal);

  let duration = Math.floor(interval / endVal);

  let counter = setInterval(function () {
    startVal += 1;
    valueDisplay.textContent = startVal;

    if (startVal == endVal) {
      clearInterval(counter);
    }
  }, duration);
});
