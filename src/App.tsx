import { ChatBubbleBottomCenterTextIcon, HeartIcon, HomeIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';


function App() {
  return (
    <>
    
      <div>
        <header>
          <Header/>
        </header>
        <div className='flex'>
        <nav className='bg-stone-200 flex flex-col min-h-screen py-8 px-3 space-y-4'>
            <Link to="/homepage">
              <div className="flex items-center">
              <HomeIcon className='h-10 w-10 cursor-pointer hover:text-gray-600 active:text-violet-700'/>
                <span className="ml-2 hidden md:inline">Hem</span>
              </div>
            </Link>
            <Link to="/library">
              <div className="flex items-center">
                <PhotoIcon className='h-10 w-10 cursor-pointer  hover:text-gray-600'/>
                <span className="ml-2 hidden md:inline">Alla recept</span>
              </div>
            </Link>
            <Link to="/savedRec">
              <div className="flex items-center">
                <HeartIcon className='h-10 w-10 cursor-pointer hover:text-gray-600'/>
                <span className="ml-2 hidden md:inline">Sparade Recept</span>
              </div>
            </Link>
            <Link to="/contact">
              <div className="flex items-center">
                <ChatBubbleBottomCenterTextIcon className='h-10 w-10 cursor-pointer hover:text-gray-600'/>
                <span className="ml-2 hidden md:inline">Kontakt</span>
              </div>
            </Link>
          </nav>
          <div className='flex-grow shadow-inner'>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
        <footer></footer>
      </div>
    
    </>
  );
}

export default App
