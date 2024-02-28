import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  HomeIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import OliveOil from "./img/oliveOil.png";
import Olives from "./img/olives.png";

function App() {
  const [savedRecipesIds, setSavedRecipesIds] = useState<string[]>([]);

  /* Synka stated med LS */
  /* använda hook? kolla onsdagens föreläsning.. behöver hjälp med denna*/
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex">
        <nav className="bg-teal-900 text-white flex min-h-screen text-nowrap flex-col py-8 px-3 space-y-4">
          <Link
            to="/homepage"
            className="flex items-center hover:text-amber-600"
          >
            <HomeIcon className="h-10 w-10 cursor-pointer" />
            <span className="mx-2 hidden lg:inline">Hem</span>
          </Link>
          <Link
            to="/library"
            className="flex items-center hover:text-amber-600"
          >
            <PhotoIcon className="h-10 w-10 cursor-pointer " />
            <span className="mx-2 hidden lg:inline">Alla recept</span>
          </Link>
          <Link
            to="/savedRec"
            className="flex items-center hover:text-amber-600"
          >
            <HeartIcon className="h-10 w-10 cursor-pointer" />
            <span className="mx-2 hidden lg:inline">Sparade Recept</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center hover:text-amber-600"
          >
            <ChatBubbleBottomCenterTextIcon className="h-10 w-10 cursor-pointer" />
            <span className="mx-2 hidden lg:inline">Kontakt</span>
          </Link>
          <div>
            <img className="w-32 mt-10" src={OliveOil} />
          </div>
        </nav>
        <div className="flex-grow shadow-inner bg-teal-900/50">
          <main
            className="lg:bg-cover lg:bg-right-bottom"
            style={{ backgroundImage: `url(${Olives})` }}
          >
            <HomePage />
            <Outlet context={[savedRecipesIds, setSavedRecipesIds]} />
          </main>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
