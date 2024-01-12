import "./style.css";
import loadHome from "./home";

// Create Top Menu List
const contentContainer = document.getElementById("content");
const splashContainer = document.createElement("div");
splashContainer.innerHTML = "";

splashContainer.className = "splash";

// Create Menu Items
var menuItems = ["Home", "Menu", "About"];

menuItems.forEach((item) => {
  var menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.textContent = item;

  menuItem.addEventListener("click", (e) => {
    console.log(`${item} was clicked`);
    const loadPage = e.target.textContent;
    if (loadPage == "Home") {
      loadHome();
    }
  });

  splashContainer.appendChild(menuItem);
});

// Append outside the forEach block
contentContainer.appendChild(splashContainer);

console.log("is this even working?");
