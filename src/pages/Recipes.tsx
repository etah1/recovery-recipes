import { useMemo, useState } from 'react';
import beanQuinoa from '../assets/beanQuinoa.jpg';
import can7 from '../assets/can7.jpg';
import curryChicken from '../assets/curryChicken.jpg';
import fruitBowl from '../assets/fruitBowl.jpg';
import savoryChicken from '../assets/savoryChicken.jpg';
import './recipes.css';

type Recipe = {
  id: string;
  title: string;
  image: string;
  notes: string;
  ingredients: string[];
  instructions: string[];
};

const recipes: Recipe[] = [
  {
    id: 'creamy-fruit-oat-bowl',
    title: 'Creamy Fruit Oat Bowl',
    image: fruitBowl,
    notes: 'Serves: 2 | Uses: Oatmeal, canned fruit, evaporated milk | Nutrition: Calcium, fiber, natural sweetness',
    ingredients: [
      '1 cup oats',
      '2 cups water',
      '1/2 cup canned fruit',
      '1/4 cup evaporated milk',
    ],
    instructions: [
      'Cook oats with water.',
      'Stir in fruit and evaporated milk.',
      'Serve warm.',
    ],
  },
  {
    id: 'savory-oatmeal-with-chicken-and-vegetables',
    title: 'Savory Oatmeal with Chicken and Vegetables',
    image: savoryChicken,
    notes: 'Serves: 2 | Uses: Oatmeal, canned vegetables, canned chicken, water',
    ingredients: [
      '1 cup rolled oats',
      '2 cups water',
      '1/2 can chicken',
      '1/2 can vegetables',
    ],
    instructions: [
      'Bring water to a boil.',
      'Stir in oats.',
      'Cook 3-5 minutes, stirring occasionally.',
      'Add chicken and vegetables.',
      'Heat through and serve.',
    ],
  },
  {
    id: 'quinoa-bean-and-vegetable-stew',
    title: 'Quinoa, Bean and Vegetable Stew',
    image: beanQuinoa,
    notes: 'Serves: 4 | Uses: Quinoa, canned beans, canned vegetables, vegetable juice, water',
    ingredients: [
      '1 cup quinoa',
      '1 can beans, drained',
      '1 can mixed vegetables, drained',
      '2 cups vegetable juice',
      '1 cup water',
    ],
    instructions: [
      'Bring vegetable juice and water to a boil.',
      'Add quinoa, reduce heat, cover, and simmer for 15 minutes.',
      'Stir in beans and vegetables.',
      'Simmer uncovered for 5 more minutes, until thick.',
    ],
  },
  {
    id: 'canned-chicken-curry-rice',
    title: 'Canned Chicken Curry Rice',
    image: curryChicken,
    notes: 'Serves: 2 | Uses: Rice, canned chicken, canned vegetables, vegetable juice, water, curry powder or paprika',
    ingredients: [
      '1 cup rice',
      '1 can canned chicken',
      '1/2 can mixed vegetables, drained',
      '1/4 cup vegetable juice',
      '1 tsp curry powder or paprika, if available',
      '2 cups water',
    ],
    instructions: [
      'Cook rice in 2 cups water.',
      'Add chicken, vegetables, and vegetable juice.',
      'Sprinkle in curry powder or paprika.',
      'Simmer 5 minutes on low, until heated through and lightly saucy.',
    ],
  },
  {
    id: 'seven-can-soup',
    title: '7-Can Soup',
    image: can7,
    notes: 'Serves: 6 | Nutrition: High protein, lower carbs',
    ingredients: [
      'One 15.25-oz can corn with red and green peppers',
      'One 15-oz can meat-only chili',
      'One 15-oz can kidney beans',
      'One 15-oz can pinto beans',
      'One 15-oz can black beans',
      'One 15-oz can diced tomatoes',
      'One 10-oz can diced tomatoes with green chiles',
      'Salt and freshly ground black pepper',
      '8 oz processed cheese',
    ],
    instructions: [
      'Empty the corn, chili, beans, tomatoes, and tomatoes with green chiles into a large pot over high heat, including the liquid from each can.',
      'Bring to a boil, then reduce the heat and simmer for 10-15 minutes.',
      'Add salt and pepper to taste.',
      'Dice the cheese and stir it into the soup until melted. Serve immediately.',
    ],
  },
];

const Recipes = () => {
  const [query, setQuery] = useState('');

  const filteredRecipes = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      const searchableContent = [
        recipe.title,
        recipe.notes,
        ...recipe.ingredients,
      ].join(' ').toLowerCase();

      return searchableContent.includes(searchText);
    });
  }, [query]);

  return (
    <main className="recipes-page">
      <div className="recipes-page-header">
        <h1 className="recipes-title">Recipes</h1>
        <p className="recipes-subtitle">
          Explore simple meals made with accessible pantry ingredients.
        </p>
      </div>

      <div className="recipes-search-row">
        <input
          className="recipes-search"
          type="search"
          placeholder="Search recipes..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button className="recipes-clear" type="button" onClick={() => setQuery('')}>
            Clear
          </button>
        )}
      </div>

      {filteredRecipes.length === 0 ? (
        <p className="recipes-empty">No recipes found for "{query}".</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <article className="recipes-layout" key={recipe.id}>
            <img className="recipes-image" src={recipe.image} alt={recipe.title} />
            <div className="recipes-instructions">
              <div className="recipes-box">
                <h2>{recipe.title}</h2>
                <p className="recipes-notes">{recipe.notes}</p>
                <h3>Ingredients</h3>
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <h3>Instructions</h3>
                <ol>
                  {recipe.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))
      )}
    </main>
  );
};

export default Recipes;
