const parent = document.getElementById("content");

function loadAboutUs() {
  const aboutUsPage = document.createElement("div");
  aboutUsPage.className = "about-us-page";

  // Include header
  const header = document.createElement("h1");
  header.className = "about-us-header";
  header.textContent = "About us";
  aboutUsPage.appendChild(header);

  const interiorImg = document.createElement("img");
  interiorImg.className = "interior-img";
  interiorImg.src = "../images/interior.jpg"; // Corrected file extension

  const separator = document.createElement("div");
  separator.className = "separator";

  const aboutUsInfo = document.createElement("div");
  aboutUsInfo.className = "about-us-info";

  const para1 = document.createElement("p");
  const para2 = document.createElement("p");

  para1.textContent = `In the bustling streets of Karachi, 1895 marked the birth of an extraordinary culinary venture that would evolve into the iconic SavoryBite Fusion Grill. Founded by the visionary Andy Nerdlekar, what started as a humble establishment larger than a stall has grown into a cherished franchise spanning the vibrant city of Mumbai. Our journey is a testament to the enduring commitment to quality and authenticity, a heritage passed down through generations. As we celebrate over a century of culinary excellence, we invite you to savor the rich tapestry of flavors that define SavoryBite Fusion Grill - an establishment that transcends time, preserving the essence of Indian cuisine.`;
  para2.textContent = `Step into our restaurant and immerse yourself in the legendary tale of our founder, Andy Nerdlekar. A century ago, even in his humble beginnings, Mr. Nerdlekar was a generous soul. Known for allowing patrons to dine for free if they couldn't afford a meal, he earned the endearing title of fusion, reflecting his benevolence. Today, as a wildly successful franchise, we hold dear to this spirit of generosity and fusion flavors. `;
  // Append paragraphs to aboutUsInfo
  aboutUsInfo.appendChild(para1);
  aboutUsInfo.appendChild(para2);

  const info = document.createElement("div");
  info.className = "info";

  // Append interiorImg, separator, and aboutUsInfo to info
  info.appendChild(interiorImg);
  info.appendChild(separator);
  info.appendChild(aboutUsInfo);

  // Append info to aboutUsPage
  aboutUsPage.appendChild(info);

  // Append aboutUsPage to the parent
  parent.appendChild(aboutUsPage);
}

// Call the function to load the content

export default loadAboutUs;
