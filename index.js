// Define function to fetch dog images
function fetchDogImage() {
  fetch("https://api.thedogapi.com/v1/images/search?limit=10")
    .then((response) => response.json())
    .then((data) => {
      console.log("Data :", data);

      updateDogImage(data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

// Update the dog image

function updateDogImage(data) {
  const dogImageElement = document.querySelector(".dog-image");
  dogImageElement.src = data[0].url;
}

// Add event listener to button to listen for clicks
const fetchDogButton = document.querySelector(".update");
fetchDogButton.addEventListener("click", fetchDogImage);

fetchDogImage();
