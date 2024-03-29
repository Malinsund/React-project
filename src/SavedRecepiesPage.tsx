import { Link } from "react-router-dom";
import { Recipe, mockedrecipes } from "./Recipes";
import { useState, useEffect } from "react";

export default function SavedRecepiesPage() {
  const [savedRecipesIds, setSavedRecipesIds] = useState<string[]>([]);

  useEffect(() => {
    const savedRecipesFromStorage = localStorage.getItem("savedRecipes");
    if (savedRecipesFromStorage) {
      setSavedRecipesIds(JSON.parse(savedRecipesFromStorage));
    }
  }, []);

  const savedRecipes = mockedrecipes.filter((recipe) =>
    savedRecipesIds.includes(recipe.id)
  );
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl">Sparade Recept</h1>
      <div className="m-3 flex flex-wrap justify-center">
        {savedRecipes.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            className="m-4 p-3 items-center border-double border-4 rounded-md  border-teal-900"
          >
            <Link to={"/recipes/" + recipe.id}>
              <img
                className="w-40 h-40 object-cover object-center mb-2 rounded"
                src={recipe.image}
                alt={recipe.title}
              />
              <h2>{recipe.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
