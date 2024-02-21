import { Link } from "react-router-dom";
import { mockedRecipies } from "./Recipies";


export default function Library(){
 
      
  return(
    <div>
    <h1 className="text-center text-3xl">massa trevliga recept</h1>
    <div className="m-3 flex flex-wrap justify-center">
      {mockedRecipies.map((recipie) => (
        <div key={recipie.id} className="flex flex-col items-center m-4 p-3 border-double border-4 rounded-md">
          <Link to={"/recipies/" + recipie.id}>
            <img className="w-40 h-40 object-cover object-center mb-2 rounded" src={recipie.image} alt={recipie.title}/> 
          </Link>
          <Link to={"/recipies/" + recipie.id} className="flex items-center">
            <p className="mr-2">{recipie.title}</p>
            
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}