import "./style.css";
import splashScreen from "./splash";
import loadAboutUs from "./about";
import loadFooter from "./footer";

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
      loadFooter();
    } else if (loadPage === "Menu") {
      splashScreen();
      loadMenu();
      loadFooter();
    } else if (loadPage === "About") {
      splashScreen();
      loadAboutUs();
      loadFooter();
    }
  }
});
loadHome();
loadFooter();
