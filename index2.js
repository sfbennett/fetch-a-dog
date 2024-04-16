// Written using async...await

async function fetchDogImage() {
  try {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=10"
    );
    const data = await response.json();
    console.log("Data :", data);
    updateDogImage(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function updateDogImage(data) {
  const dogImageElement = document.querySelector(".dog-image");
  dogImageElement.src = data[0].url;
}

const fetchDogButton = document.querySelector(".update");
fetchDogButton.addEventListener("click", fetchDogImage);

fetchDogImage();
