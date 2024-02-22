import { ChatBubbleBottomCenterTextIcon, HeartIcon, HomeIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './img/Footer';
import OliveOil from "./img/oliveOil.png";
import Olives from "./img/olives.png";

function App() {
  return (
    <>
    
      <div>
        <header className='sticky'>
          <Header/>
        </header>
        <div className='flex'>
        <nav className='bg-teal-900 text-white flex min-h-screen flex-col py-8 px-3 space-y-4'>
            <Link to="/homepage">
              <div className="flex items-center">
              <HomeIcon className='h-10 w-10 cursor-pointer hover:text-amber-600 active:text-violet-700'/>
                <span className="ml-2 hidden lg:inline">Hem</span>
              </div>
            </Link>
            <Link to="/library">
              <div className="flex items-center">
                <PhotoIcon className='h-10 w-10 cursor-pointer  hover:text-amber-600'/>
                <span className="ml-2 hidden lg:inline">Alla recept</span>
              </div>
            </Link>
            <Link to="/savedRec">
              <div className="flex items-center">
                <HeartIcon className='h-10 w-10 cursor-pointer hover:text-amber-600'/>
                <span className="ml-2 hidden lg:inline">Sparade Recept</span>
              </div>
            </Link>
            <Link to="/contact">
              <div className="flex items-center">
                <ChatBubbleBottomCenterTextIcon className='h-10 w-10 cursor-pointer hover:text-amber-600'/>
                <span className="ml-2 hidden lg:inline">Kontakt</span>
              </div>
            </Link>
            <div>
              <img className='w-32 mt-10' src={OliveOil} />
            </div>
          </nav>
          <div className='flex-grow shadow-inner bg-teal-900/50'>
            <main className="bg-cover bg-right-bottom" style={{ backgroundImage: `url(${Olives})` }}>
              <Outlet />
            </main>
          </div>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    
    </>
  );
}

export default App
