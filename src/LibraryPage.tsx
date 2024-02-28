import { Link } from "react-router-dom";
import { mockedrecipes } from "./Recipes";

export default function Library() {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl pt-5">Massa trevliga recept</h1>
      <div className="m-3 flex flex-wrap justify-center">
        {mockedrecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="flex flex-col items-center m-4 p-3 border-double border-4 rounded-md border-teal-900 bg-teal-700/50 drop-shadow-xl"
          >
            <Link to={"/recipes/" + recipe.id}>
              <img
                className="w-40 h-40 object-cover object-center mb-2 rounded"
                src={recipe.image}
                alt={recipe.title}
              />
            </Link>
            <Link to={"/recipes/" + recipe.id} className="flex items-center">
              <p className="mr-2">{recipe.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
