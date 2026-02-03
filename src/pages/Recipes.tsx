import { useMemo, useState } from "react";
import fruitBowl from "../assets/fruitBowl.jpg";
import savoryChicken from "../assets/savoryChicken.jpg";
import beanQuinoa from "../assets/beanQuinoa.jpg";
import curryChicken from "../assets/curryChicken.jpg";
import can7 from "../assets/can7.jpg";
import "./recipes.css";

type Recipe = {
  id: string;
  title: string;
  image: string;
  instructionsTitle: string;
  Instructions: string[];
  Ingredients: string[];
  Notes: string;
};

const RECIPES: Recipe[] = [
  {
    id: "Creamy Fruit Oat Bowl",
    title: "Creamy Fruit Oat Bowl",
    image: fruitBowl,
    instructionsTitle: "Creamy Fruit Oat Bowl Instructions",
    Notes: "Serves: 2 | Uses: Oatmeal, Canned fruit, Evaporated milk | Nutrition: Calcium, Fiber, Natural Sweetness",
    Instructions: [
      "Cook oats with water",
      "Stir in fruit and evaporated milk",
      "Serve warm!"
    ],
    Ingredients: [
      "1 cup Oats",
      "2 cups Water",
      "1/2 cup Canned Fruit",
      "1/4 cup Evaporated Milk",
    ],
  },

  {
    id: "Savory Oatmeal with Chicken & Vegetables",
    title: "Savory Oatmeal with Chicken & Vegetables",
    image: savoryChicken,
    instructionsTitle: "Savory Oatmeal with Chicken & Vegetables Instructions",
    Notes: "Serves: 2 | Uses: Oatmeal, Canned vegetables, Canned chicken, Water",
    Instructions: [
      "Bring water to a boil",
      "Stir in oats",
      "Cook 3-5 minutes, stirring",
      "Add chicken and vegetables",
      "Heat through and serve!"
    ],
    Ingredients: [
      "1 cup rolled oats",
      "2 cups Water",
      "1/2 can Chicken",
      "1/2 can vegetables",
    ],
  },

  {
    id: "Quinoa, Bean & Vegetable Stew",
    title: "Quinoa, Bean & Vegetable Stew",
    image: beanQuinoa,
    instructionsTitle: "Quinoa, Bean & Vegetable Stew Instructions",
    Notes: "Serves: 4 | Uses: Quinoa, Canned beans, Canned vegetables, vegetable juice, water",
    Instructions: [
      "Bring vegetable juice and water to a boil",
      "Add quinoa, reduce heat, cover, and simmer for 15 minutes",
      "Stir in beans and vegetables",
      "Simmer uncovered for 5 more minutes until thick",
    ],
    Ingredients: [
      "1 cup Quinoa",
      "1 can Beans (black, kidney, or pinto), drained",
      "1 can Mixed Vegetables, drained",
      "2 cups vegetable juice",
      "1 cup Water"
    ],
  },

  {
    id: "Canned Chicken Curry Rice",
    title: "Canned Chicken Curry Rice",
    image: curryChicken,
    instructionsTitle: "Canned Chicken Curry Rice Instructions",
    Notes: "Serves: 2 | Uses: Rice, Canned chicken, Canned vegetables, Vegetable juice, Water, Curry powder or Paprika",
    Instructions: [
      "Cook rice in 2 cups water",
      "Add chicken, vegetables, and vegetable juice",
      "Sprinkle in curry powder or paprika",
      "Simmer 5 minutes on low until heated through and lightly saucy",
    ],
    Ingredients: [
      "1 cup Rice",
      "1 can of Canned chicken",
      "1/2 can Mixed-Vegetables, drained",
      "1/4 cup Vegetable juice",
      "1 tsp Curry powder or paprika (if available)",
      "2 cups of water"
    ],
  },

  {
    id: "7-Can Soup",
    title: "7-Can Soup",
    image: can7,
    instructionsTitle: "7-Can Soup Instructions",
    Notes: "Serves: 6 | Nutrition: High protein, lower carbs",
    Instructions: [
      "Empty the corn, chili, kidney beans, pinto beans, black beans, tomatoes and tomatoes with green chiles, liquid included, into a large pot over high heat",
      "Bring to a boil, reduce the heat and simmer for 10-15 minutes to bring all the flavors together",
      "Add salt and pepper to taste",
      "Dice the cheese and stir it into the soup until melted. Serve immediately!",
    ],
    Ingredients: [
      "One 15.25-oz can Corn with red and green peppers, such as Del Monte Fiesta Corn",
      "One 15-oz can Meat-only chili",
      "One 15-oz can Kidney beans",
      "One 15-oz can Pinto beans",
      "One 15-oz can Black beans",
      "One 15-o can Diced tomatoes",
      "One 10-oz can Diced tomatoes with green chiles, such as Ro*Tel",
      "Salt and Freshly ground black pepper",
      "8-oz Processed cheese, such as Velveeta"
    ],
  },
];

const Recipes = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RECIPES;
    return RECIPES.filter((r) => r.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="recipes-page">
      <h1 className="recipes-title">Recipes</h1>
      <p className="recipes-subtitle">
        Explore a variety of recipes to suit your taste and dietary needs.
      </p>

      {/* Search */}
      <div className="recipes-searchRow">
        <input
          className="recipes-search"
          type="text"
          placeholder='Search recipes'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        {query && (
          <button className="recipes-clear" onClick={() => setQuery("")}>
            Clear
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="recipes-empty">No recipes found for “{query}”.</p>
      ) : (
        filtered.map((recipe) => (
          <div className="recipes-layout" key={recipe.id}>
            <img className="recipes-image" src={recipe.image} alt={recipe.title} />

            <div className="recipes-instructions">
              <div className="recipes-box">
                <h2>{recipe.instructionsTitle}</h2>

                <p className="recipes-notes">
                  {recipe.Notes}
                </p>

                <h3>Ingredients</h3>
                <ul>
                  {recipe.Ingredients.map((Ingredients, idx) => (
                    <li key={idx}>{Ingredients}</li>
                  ))}
                </ul>

                <h3>Instructions</h3>
                <ol>
                  {recipe.Instructions.map((Instructions, idx) => (
                    <li key={idx}>{Instructions}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Recipes;
