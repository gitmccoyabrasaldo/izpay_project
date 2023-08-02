// Call header components to all pages
// Reusing the same header across multiple pages
$(function () {
  $("#header").load("/components/header.html");
});

// Reusing the same partner section across multiple pages
$(function () {
  $("#partner").load("/components/partner.html");
});

// Reusing the same service section across multiple pages
$(function () {
  $("#service").load("/components/service.html");
});

// Reusing the same newsletter section across multiple pages
$(function () {
  $("#newsletter").load("/components/newsletter.html");
});

// Reusing the same footer section across multiple pages
$(function () {
  $("#footer").load("/components/footer.html");
});

// Reusing the same achievement section across multiple pages
$(function () {
  $("#achievement").load("/components/achievement.html");
});

// FOR UP COUNTER numbers
// let valueDisplay = document.querySelectorAll(".number");

// let interval = 4000;

// valueDisplay.forEach((valueDisplay) => {
//   let startVal = 0;
//   let endVal = parseInt(valueDisplay.getAttribute("data-val"));
//   // console.log(endVal);

//   let duration = Math.floor(interval / endVal);

//   let counter = setInterval(function () {
//     startVal += 1;
//     valueDisplay.textContent = startVal;

//     if (startVal == endVal) {
//       clearInterval(counter);
//     }
//   }, duration);
// });
