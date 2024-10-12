// app.js
import { coffeeDrinks } from './data.js'; // Importing the data from data.js

// Function to render the coffee drinks
function renderCoffeeDrinks() {
    const coffeeContainer = document.getElementById('coffee-container'); // Get the container element

    coffeeDrinks.forEach(drink => {
        // Create a new div for each coffee drink
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('coffee-item'); // Add a class for styling

        // Add the drink name
        const drinkName = document.createElement('h2');
        drinkName.textContent = drink.name;

        // Add the drink description
        const drinkDescription = document.createElement('p');
        drinkDescription.textContent = drink.description;

        // Add the ingredients
        const drinkIngredients = document.createElement('p');
        drinkIngredients.textContent = `Ingredients: ${drink.ingredients.join(', ')}`;

        // Add the hot/cold status
        const drinkIsCold = document.createElement('p');
        drinkIsCold.textContent = drink.isCold ? 'Cold Drink' : 'Hot Drink';

        // Add the recipe
        const drinkRecipe = document.createElement('p');
        drinkRecipe.textContent = `Recipe: ${drink.recipe}`;

        // Append all elements to the drink div
        drinkDiv.appendChild(drinkName);
        drinkDiv.appendChild(drinkDescription);
        drinkDiv.appendChild(drinkIngredients);
        drinkDiv.appendChild(drinkIsCold);
        drinkDiv.appendChild(drinkRecipe);

        // Finally, append the drink div to the coffee container
        coffeeContainer.appendChild(drinkDiv);
    });
    console.log('script works');
}
// Call the function to render the drinks on the page
renderCoffeeDrinks();
