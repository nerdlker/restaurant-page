function loadMenu() {
  const parent = document.getElementById("content");

  const foodlist = [
    {
      name: "Dal Tadka",
      price: "220",
      imgID: 1,
      url: "./images/dal_tadka.jpg",
      description:
        "Our house speciality Yellow Dal tempered with butter, cumin, red chilli powder and fried onions for add oomph",
    },
    {
      name: "Dal Kichdi",
      price: "240",
      imgID: 2,
      url: "./images/dal_kichdi.jpg",
      description: "The famous yellow dal mixed with rice and love",
    },
    {
      name: "Papad Churi",
      price: "180",
      imgID: 3,
      url: "./images/papad-churi.jpg",
      description: "Crushed lentil crackers fried with onions and spices",
    },
    {
      name: "Masala Chaas",
      price: "150",
      imgID: 4,
      url: "./images/masala-chaas.jpg",
      description: "Signature milk buter drink",
    },
    {
      name: "Special Roti",
      price: "55",
      imgID: 5,
      url: "./images/special-roti.jpg",
      description: "Indian flat bread thats not naan and healthier",
    },
    {
      name: "Gulab Jamun",
      price: "230",
      imgID: 6,
      url: "./images/gulab-jamun.jpg",
      description: "Sometime referred to as balab jalam",
    },
  ];

  // Create a container for all food items
  var foodContainer = document.createElement("div");
  foodContainer.className = "food-container";

  foodlist.forEach((item) => {
    // Create a container for each food item
    var foodItemContainer = document.createElement("div");
    foodItemContainer.className = "food-item";

    // Create elements for food name and price
    var foodName = document.createElement("div");
    var foodPrice = document.createElement("div");
    var foodImg = document.createElement("div");
    var foodUrl = document.createElement("img");
    var foodDescription = document.createElement("div");

    //Add Classes
    foodName.className = "food-name";
    foodImg.className = "food-img";
    foodUrl.className = "card-image";
    foodDescription.className = "food-desc";
    foodPrice.className = "food-price";

    foodName.textContent = item.name;
    foodImg.textContent = item.imgID;
    foodDescription.textContent = item.description;
    foodPrice.textContent = `Rs.${item.price}`;
    foodUrl.src = item.url;

    // Append food name and price to the food item container
    foodItemContainer.appendChild(foodName);
    foodItemContainer.appendChild(foodUrl);
    foodItemContainer.appendChild(foodDescription);
    foodItemContainer.appendChild(foodPrice);

    // Append the food item container to the main container
    foodContainer.appendChild(foodItemContainer);
  });

  // Append the main container to the document or a specific element
  // document.body.appendChild(foodContainer);
  parent.appendChild(foodContainer);
}

export default loadMenu;
