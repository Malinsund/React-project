import { HomeIcon } from '@heroicons/react/24/outline';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <>
    <header>Hej!</header>
    <nav>
      <Link to="/homepage">
      <HomeIcon className='h-20 w-20 cursor-poiner'/>
      </Link>
      <Link to="/library">
      <PhotoIcon className='h-20 w-20 cursor-poiner'/>
      </Link>
    </nav>
    <aside></aside>
    <main>
      <Outlet />
    </main>
    <footer></footer>
    </>
  );
}

export default App
