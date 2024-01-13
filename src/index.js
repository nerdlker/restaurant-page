import "./style.css";
import splashScreen from "./splash";

// Create Top Menu List
const contentContainer = document.getElementById("content");
const { loadHome, loadMenu } = splashScreen();

function clearContent() {
  contentContainer.innerHTML = "";
}

// Add Menu Event Listener
contentContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-item")) {
    const loadPage = e.target.textContent;
    console.log(`${loadPage} was clicked`);

    clearContent();

    if (loadPage === "Home") {
      splashScreen();
      loadHome();
    } else if (loadPage === "Menu") {
      splashScreen();
      loadMenu();
    }
  }
});
