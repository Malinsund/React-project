import { HeartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { mockedRecipies } from "./Recipies";


export default function ShowRecipie(){
    const params = useParams();
    const recipie = mockedRecipies.find((recipie) => recipie.id === params.id);

    const [savedRecipies, setSavedRecipies] = useState<string[]>([]);

    const toggleSaved = (id: string) => {
      if (savedRecipies.includes(id)) {
        const updatedSavedRecipies = savedRecipies.filter(
          (recipeId) => recipeId !== id
        );
        setSavedRecipies(updatedSavedRecipies);
        localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipies));
      } else {
        const updatedSavedRecipies = [...savedRecipies, id];
        setSavedRecipies(updatedSavedRecipies);
        localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipies));
      }
    };

    const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

    if (!recipie){
        return(
            <div>
                <h1>Detta recept uppdateras..</h1>
            </div>
        );
    }

    return (
        <div className="bg-stone-100 min-h-screen">
           <div className="relative">
        <img 
          className={`w-full scale-75 h-96 object-cover object-center cursor-pointer ${isFullscreen ? '' : ''}`} 
          src={recipie.image}
          alt="Bild på recept"
          onClick={toggleFullscreen}
        />
        {isFullscreen && (
          <img 
            className="fixed h-screen w-screen top-0 object-contain cursor-pointer"
            src={recipie.image}
            alt="Bild på recept i fullskärm"
            onClick={toggleFullscreen}
          />
        )}
      </div>
            <h1 className="text-center text-3xl">{recipie.title}</h1>
            {savedRecipies.includes(recipie.id) ? (
            <HeartIcon // detta är när det är sparat
          className="cursor-pointer w-10 h-10 text-red-600"
          onClick={() => toggleSaved(recipie.id)}
        />
      ) : (
        <HeartIcon  // detta är när det osparas
          className="cursor-pointer w-10 h-10"
          onClick={() => toggleSaved(recipie.id)}
        />
      )}
            <div className="ml-5">
                <h2 className="font-bold my-2">Ingredienser:</h2>
                <ul>
                    {recipie.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="ml-5 max-w-prose">
                <h3 className="font-bold my-2">Beskrivning:</h3>
                <p>{recipie.description}</p>
               
            </div>
                        
        </div>
        
    )
}