import { useMemo, useState } from "react";
import steak from "../assets/steak.jpeg";
import eggs from "../assets/eggs.jpeg";
import "./recipes.css";

type Recipe = {
  id: string;
  title: string;
  image: string;
  instructionsTitle: string;
  steps: string[];
  notes: string[];
};

const RECIPES: Recipe[] = [
  {
    id: "steak",
    title: "Steak",
    image: steak,
    instructionsTitle: "Steak Instructions",
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Season steak with salt, pepper, and garlic.",
      "Sear steak on high heat for 2–3 minutes per side.",
      "Transfer to oven and bake 8–12 minutes.",
      "Let rest for 5 minutes.",
      "Serve and enjoy!",
      "Poop",
      "Poop",
      "Poop",
      "Poop",
      "Poop",
      "Poop",
      "Poop",
    ],
    notes: [
      "Use a thermometer for doneness.",
      "Letting it rest keeps it juicy.",
      "Butter-baste for extra flavor.",
      "Slice against the grain.",
    ],
  },
  {
    id: "eggs",
    title: "Eggs",
    image: eggs,
    instructionsTitle: "Eggs Instructions",
    steps: [
      "Crack eggs into a bowl and whisk.",
      "Heat a nonstick pan on medium-low.",
      "Add a small amount of butter or oil.",
      "Pour eggs in and stir gently.",
      "Cook until just set.",
      "Season and serve.",
    ],
    notes: [
      "Low heat = creamy eggs.",
      "Don’t overcook, eggs keep cooking off heat.",
      "Add veggies or cheese if you want.",
    ],
  },
  {
    id: "veggies",
    title: "Sheet-Pan Veggies",
    image: steak,
    instructionsTitle: "Sheet-Pan Veggies Instructions",
    steps: [
      "Preheat oven to 425°F (220°C).",
      "Chop vegetables evenly.",
      "Toss with olive oil and seasoning.",
      "Spread on a baking sheet.",
      "Roast 25–30 minutes, stirring once.",
      "Serve warm.",
    ],
    notes: [
      "Carrots + broccoli + potatoes work great.",
      "Add lemon juice after roasting.",
      "Store leftovers in a container for meal prep.",
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

                <ol>
                  {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>

                <h3>Notes</h3>
                <ul>
                  {recipe.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Recipes;
