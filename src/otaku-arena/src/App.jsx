// import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './component/Navbar';
import CharBoxes from './pageTwo/actionPage';
import Bodyintro from './component/Bodyintro';
import StartButton from './component/Start';
import Homepage from './pageTwo/homepage';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/actionPage', element: <CharBoxes /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
//////////////////////////////////////////////////
export default App;
