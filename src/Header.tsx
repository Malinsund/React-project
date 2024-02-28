import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe, mockedrecipes } from "./Recipes";
import chefHat from "./img/chefHatWhite.png";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = mockedrecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-teal-900 text-white">
        <div className="flex items-center">
          <Link to="/homepage">
            <img
              className="lg:h-20 lg:w-20 h-10 m-2"
              src={chefHat}
              alt="kock mössa"
            />
          </Link>
          <h1 className="font-extrabold font-sans lg:text-3xl md:ml-5">
            Mat-Malle
          </h1>
        </div>
        <div className="relative">
          <input
            className="rounded-lg border md:p-2 mr-5 md:w-80 text-black"
            type="search"
            placeholder="Sök recept..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchResults.length > 0 && (
            <div className="absolute bg-white text-black shadow-md rounded-lg mt-1 p-2 w-full ">
              {searchResults.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipes/${recipe.id}`}
                  onClick={handleClearSearch}
                >
                  <p>{recipe.title}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
