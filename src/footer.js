const parent = document.getElementById("content");

function loadFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `<a href="https://github.com/nerdlker/"> copyright nerdlekar 2024 
  <img src="./images/github.png" alt="gigit"></a>
   
    `;
  parent.appendChild(footer);
}

export default loadFooter;
