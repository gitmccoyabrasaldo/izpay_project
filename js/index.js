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
