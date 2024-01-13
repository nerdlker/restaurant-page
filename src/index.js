import "./style.css";

import loadHome from "./home";
import loadMenu from "./menu";

// Create Top Menu List
const contentContainer = document.getElementById("content");

const splashContainer = document.createElement("div");

splashContainer.className = "splash";

// Create Menu Items
var menuItems = ["Home", "Menu", "About"];
function clearContent() {
  contentContainer.innerHTML = "";
}

menuItems.forEach((item) => {
  var menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.textContent = item;

  menuItem.addEventListener("click", (e) => {
    console.log(`${item} was clicked`);
    const loadPage = e.target.textContent;
    if (loadPage == "Home") {
      clearContent();
      loadHome();
    } else if (loadPage == "Menu") {
      clearContent();
      loadMenu();
    }
  });

  splashContainer.appendChild(menuItem);
});

// Append outside the forEach block
contentContainer.appendChild(splashContainer);

console.log("is this even working?");