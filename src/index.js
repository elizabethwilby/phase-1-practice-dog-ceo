console.log('%c HI', 'color: firebrick');

const img = "https://dog.ceo/api/breeds/image/random/4";
document.addEventListener('DOMContentLoaded', () => {
    fetchDogImages();
});

async function fetchDogImages() {
    try { 
        const response = await fetch(img);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        const imgUrls = data.message;

        imgUrls.forEach((url) => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "random dog";

            document.body.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
    fetchDogBreeds();
});

async function fetchDogBreeds() {
    try {
        const response = await fetch(breedUrl);

        if(!response.ok) {
            throw new Error("Failed to fetch dog breeds");
        }

        const data = await response.json();
        const breeds = Object.keys(data.message);
        const breedList = document.querySelector('ul');
        
        breeds.forEach((breed) => {
            const li = document.createElement("li");

            li.textContent = breed;

            li.addEventListener("click", () => {
                li.style.color = "tomato"; 
            });

            breedList.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching breeds", error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector("#breed-dropdown");
  dropdown.addEventListener("change", (event) => {
    const letter = event.target.value;
    const allBreeds = document.querySelectorAll('li');

    allBreeds.forEach((breed) => {
        if(breed.textContent.startsWith(letter)) {
            breed.style.display = "";

        } else {
            breed.style.display = "none";
        }
    });
  });
});