function loadHome() {
  const parent = document.getElementById("content");

  const homeContainer = document.createElement("div");
  const resHeader = document.createElement("h1");
  const resDesc = document.createElement("p");

  resHeader.textContent = "SavoryBite Fusion Grill";
  resDesc.textContent =
    "Welcome to SavoryBite Fusion Grill, where culinary innovation meets delectable traditions! Our restaurant is a harmonious blend of diverse flavors, bringing you a unique dining experience that tantalizes your taste buds. At SavoryBite, we take pride in crafting mouthwatering dishes that seamlessly fuse various culinary influences.";

  homeContainer.className = "home";

  homeContainer.appendChild(resHeader);
  homeContainer.appendChild(resDesc);

  parent.appendChild(homeContainer);
}

export default loadHome;
