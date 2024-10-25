import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Mainscreen1 from './Components/Mainscreen1'
import Homescreen from './Components/Homescreen'
import Schedule from './Components/Schedule'
import Forcasting from './Components/Forcasting'
import Diagram from "./Components/Diagram";

function App() {
 


    const router = createBrowserRouter([
        {
          path: "/",
          element: <><Navbar/><Mainscreen1/></>
          
        },
        {
          path: "/Home",
          element: <div className='d-flex flex-row'><Sidebar/><Homescreen/></div>
        },
        {
          path: "/Schedule",
          element: <div className='d-flex flex-row'><Sidebar/><Schedule/></div>
        },
        {
          path: "/Forcasting",
          element: <div className='d-flex flex-row'><Sidebar/><Forcasting/></div>
        },
        {
          path: "/Blog",
          element: <div className='d-flex flex-row'><Sidebar/><Diagram/></div>
        }

    ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
