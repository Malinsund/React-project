import { HeartIcon as HeartSolidIcon } from "@heroicons/react/16/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { mockedrecipes } from "./Recipes";

export default function Showrecipe() {
  const params = useParams();

  const recipe = mockedrecipes.find((recipe) => recipe.id === params.id);

  const [savedrecipes, setSavedrecipes] = useState<string[]>([]);

  const toggleSaved = (id: string) => {
    if (savedrecipes.includes(id)) {
      const updatedSavedrecipes = savedrecipes.filter(
        (recipeId) => recipeId !== id
      );
      setSavedrecipes(updatedSavedrecipes);
      localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedrecipes));
    } else {
      const updatedSavedrecipes = [...savedrecipes, id];
      setSavedrecipes(updatedSavedrecipes);
      localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedrecipes));
    }
  };

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!recipe) {
    return (
      <div>
        <h1>Detta recept uppdateras..</h1>
      </div>
    );
  }

  return (
    <div className="bg-stone-100 min-h-screen">
      <div className="relative">
        <img
          className={`w-full scale-75 h-96 object-cover object-center cursor-pointer ${
            isFullscreen ? "" : ""
          }`}
          src={recipe.image}
          alt="Bild på recept"
          onClick={toggleFullscreen}
        />
        {isFullscreen && (
          <img
            className="fixed h-screen w-screen top-0 object-contain cursor-pointer"
            src={recipe.image}
            alt="Bild på recept i fullskärm"
            onClick={toggleFullscreen}
          />
        )}
      </div>
      <h1 className="text-center text-3xl">{recipe.title}</h1>
      {savedrecipes.includes(recipe.id) ? (
        <HeartSolidIcon // detta är när det är sparat
          className="cursor-pointer w-10 h-10 text-red-600"
          onClick={() => toggleSaved(recipe.id)}
        />
      ) : (
        <HeartOutlineIcon // detta är när det osparas
          className="cursor-pointer w-10 h-10 text-red-600"
          onClick={() => toggleSaved(recipe.id)}
        />
      )}
      <div className="ml-5">
        <h2 className="font-bold my-2">Ingredienser:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="ml-5 max-w-prose">
        <h3 className="font-bold my-2">Beskrivning:</h3>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
}
