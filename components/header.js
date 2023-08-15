let sidebar = document.getElementById("sideBar");
let sidebarOverlay = document.getElementById("sideBarOverlay");
let sideMenu1 = document.getElementById("sideMenu1");
let sideMenu2 = document.getElementById("sideMenu2");

// HEADER BURGER MENU
function toggleSidebar() {
  sidebar.classList.toggle("open-sidebar");
  sidebarOverlay.classList.toggle("open-overlay");
}

// SIDEBAR PAGES AND CONTACTS SUB-MENU
function toggleSubMenu1() {
  sideMenu1.classList.toggle("open-menu1");
}

function toggleSubMenu2() {
  sideMenu2.classList.toggle("open-menu2");
}

// Navbarrr
$(function () {
  let navLinks = $(".links a");
  let dropdownMenuItems = $(".dropdown_menu a");

  navLinks.on("click", function (event) {
    navLinks.removeClass("active");
    dropdownMenuItems.removeClass("active");

    $(this).addClass("active");

    const targetURL = $(this).attr("href");
    window.location.href = targetURL;

    event.preventDefault();
  });

  // Set the active link on page load
  const currentURL = window.location.href;
  navLinks.each(function () {
    if (currentURL.includes($(this).attr("href"))) {
      $(this).addClass("active");
      return false; // Stop iteration once an active link is found
    }
  });

  // Add active class to dropdown menu item and its parent "dropdown a" on page load
  dropdownMenuItems.each(function () {
    if (currentURL.includes($(this).attr("href"))) {
      $(this).addClass("active");
      $(this).closest(".dropdown").find(".eee").addClass("active"); // Add active class to parent dropdown "a"
      return false; // Stop iteration once an active dropdown item is found
    }
  });
});

// Sidebar
$(function () {
  let sideLinks = $(".sidebar .links a");
  let sub_menu = $(".sub_menu li a");

  sideLinks.on("click", function (event) {
    sideLinks.removeClass("active");
    sub_menu.removeClass("active");

    $(this).addClass("active");

    const targetURL = $(this).attr("href");
    window.location.href = targetURL;

    event.preventDefault();
  });

  // Set the active link on page load
  const currentURL = window.location.href;
  sideLinks.each(function () {
    if (currentURL.includes($(this).attr("href"))) {
      $(this).addClass("active");
      return false; // Stop iteration once an active link is found
    }
  });

  // Add active class to dropdown menu item and its parent "dropdown a" on page load
  sub_menu.each(function () {
    if (currentURL.includes($(this).attr("href"))) {
      $(this).addClass("active");
      $(this).closest(".menu").find(".ee").addClass("active"); // Add active class to parent dropdown "a"
      return false; // Stop iteration once an active dropdown item is found
    }
  });
});
