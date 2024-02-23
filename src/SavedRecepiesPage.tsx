import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="min-h-screen">
            
            <h1 className="text-center text-3xl">Sparade Recept</h1>
            <div className="m-3 flex flex-wrap justify-center">
            {savedRecipes.map((recipie: Recipie) => (
                <div key={recipie.id} className="m-4 p-3 border-double border-4 rounded-md border-orange-500">
                    <Link to={"/recipies/" + recipie.id}>
                    <img className="w-40 h-40 object-cover object-center mb-2 rounded" src={recipie.image} alt={recipie.title} />
                    <h2>{recipie.title}</h2>
                    </Link>
                </div>
            ))}
            </div>
            
        </div>
    );

}