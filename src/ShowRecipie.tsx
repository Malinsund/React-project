import { useParams } from "react-router-dom";
import { mockedRecipies } from "./Recipies";


export default function ShowRecipie(){
    const params = useParams();
    const recipie = mockedRecipies.find((recipie) => recipie.id === params.id);

    if (!recipie){
        return(
            <div>
                <h1>Detta recept uppdateras..</h1>
            </div>
        );
    }

    return (
        <div>
           <img className="w-full h-96 object-cover" src={recipie.image}/>
            <h1 className="text-center text-xl">{recipie.title}</h1>
            <div>
                <h2>Ingredienser:</h2>
                <ul>
                    {recipie.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Beskrivning:</h3>
                <p>{recipie.description}</p>
            </div>

        </div>
    )
}