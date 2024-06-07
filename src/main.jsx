import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import FitMother from './FitnessNetwork/FitMother';
import Service from './servic/Service';
import ProductsMother from './Products/ProductsMother';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/fit",
        element: <FitMother></FitMother>,
      },
      {
        path: "/service",
        element:  <Service></Service> ,
      },
      {
        path: "/products",
        element:  <ProductsMother></ProductsMother> ,
      },
      
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
