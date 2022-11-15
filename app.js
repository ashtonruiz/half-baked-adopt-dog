import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async () => {
    // fetch all dogs
    const dogs = await getDogs();
    for (let dog of dogs) {
        // render and append all dog cards to the container
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
});
