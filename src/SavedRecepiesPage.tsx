import { useEffect, useState } from "react";
import { Recipie, mockedRecipies } from "./Recipies";

export default function SavedRecepiesPage(){

    const [savedRecipesIds, setSavedRecipesIds] = useState<string[]>([]);

    useEffect(() => {
        
        const savedRecipesFromStorage = localStorage.getItem('savedRecipes');
        if (savedRecipesFromStorage) {
            setSavedRecipesIds(JSON.parse(savedRecipesFromStorage));
        }
    }, []);

    const savedRecipes = mockedRecipies.filter(recipe => savedRecipesIds.includes(recipe.id));

    return (
        <div>
            <h1 className="text-center text-3xl">Sparade Recept</h1>
            {savedRecipes.map((recipie: Recipie) => (
                <div key={recipie.id}>
                    <img className="w-40 h-40 object-cover rounded" src={recipie.image} alt={recipie.title} />
                    <h2>{recipie.title}</h2>
                </div>
            ))}
            
        </div>
    );

}