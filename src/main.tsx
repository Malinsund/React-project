import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Contact from './ContactPage.tsx';
import HomePage from './HomePage.tsx';
import Library from './LibraryPage.tsx';
import SavedRecepies from './SavedRecepiesPage.tsx';
import ShowRecipie from './ShowRecipie.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App} >
      <Route path="homepage" Component={HomePage} />
      <Route path="library" Component={Library}  />
      <Route path='savedRec' Component={SavedRecepies} />
      <Route path='contact' Component={Contact} />
      <Route path='recipies/:id' Component={ShowRecipie}/>
      <Route path='*' element={<span>Sidan finns inte...</span>} />

    </Route>
  )

) ;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
