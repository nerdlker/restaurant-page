import loadHome from "./home";
import loadMenu from "./menu";

function splashScreen() {
  const contentContainer = document.getElementById("content");
  const splashContainer = document.createElement("div");

  splashContainer.className = "splash";

  // Create Menu Items
  var menuItems = ["Home", "Menu", "About"];

  menuItems.forEach((item) => {
    var menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.textContent = item;

    splashContainer.appendChild(menuItem);
    console.log("splash executed");
  });

  contentContainer.appendChild(splashContainer);

  return { loadHome, loadMenu };
}

export default splashScreen;
