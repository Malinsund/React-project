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
            <nav className='bg-stone-200'>
              <Link to="/homepage">
              <HomeIcon className='h-10 w-10 cursor-poiner'/>
              </Link>
              <Link to="/library">
              <PhotoIcon className='h-10 w-10 cursor-poiner'/>
              </Link>
              <Link to="/savedRec">
                <HeartIcon className='h-10 w-10 cursor-poiner'/>
              </Link>
              <Link to="/contact">
                <ChatBubbleBottomCenterTextIcon />
              </Link>
            </nav>
          <div>
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
