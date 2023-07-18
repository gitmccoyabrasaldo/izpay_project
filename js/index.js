let sidebar = document.getElementById("sideBar");
let sidebarOverlay = document.getElementById("sideBarOverlay");
let sideMenu1 = document.getElementById("sideMenu1");
let sideMenu2 = document.getElementById("sideMenu2");

function toggleSidebar() {
  sidebar.classList.toggle("open-sidebar");
  sidebarOverlay.classList.toggle("open-overlay");
}

function toggleSubMenu1() {
  sideMenu1.classList.toggle("open-menu1");
}

function toggleSubMenu2() {
  sideMenu2.classList.toggle("open-menu2");
}
