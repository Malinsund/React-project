import { Link } from "react-router-dom";
import { mockedRecipies } from "./Recipies";


export default function Library(){
    return(
        <div>
            <h1 className="text-center text-3xl">massa trevliga recept</h1>
            <div className="flex m-3 text-center">
                {mockedRecipies.map((recipie) => (
            <Link key={recipie.id} to={"/recipies/" + recipie.id}>
              <img className="w-40 h-40 object-cover object-center m-4" src={recipie.image}/> {recipie.title}
            </Link>
          ))}

      </div>
        </div>
    )
}