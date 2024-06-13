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
import Login from './login/Login';
import SignUp from './login/SignUp';
import Gallery from './login/Gallery';
import App from './Appointment/App';
import Contact from './Home files/Contact';
import Blog from './Blog/Blog';
import Dash from './Dashboard/Dash';
import Info from './Dashboard/Info';
import Charts from './Dashboard/Charts';
import Coach from './Dashboard/Coach';
import Goal from './Dashboard/Goal';
import Payment from './Dashboard/Payment';
import Location from './Dashboard/Location';
import Trainer from './trainer/Trainer';
import Alex from './trainer/Alex';
import Case from './trainer/Case';
import Jamie from './trainer/Jamie';
import Taylor from './trainer/Taylor';
import Jordan from './trainer/Jordan';
import Morgan from './trainer/Morgan';
import Reed from './trainer/Reed';
import Quin from './trainer/Quin';
import Devin from './trainer/Devin';
import BookDay from './Home files/BookDay';
import Benifits from './Home files/Benifits';
import Learn from './Home files/Learn';




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
      {
        path: "/login",
        element:    <Login></Login> ,
      },
      {
        path: "/up",
        element: <SignUp></SignUp> ,
      },
      {
        path: "/gal",
        element:  <Gallery></Gallery> ,
      },
      {
        path: "/app",
        element:  <App></App> ,
      },
      {
        path: "/contact",
        element:   <Contact></Contact> ,
      },
      {
        path: "/blog",
        element:   <Blog></Blog> ,
      },
      {
        path: "/train",
        element:   <Trainer></Trainer> ,
      },
      {
        path: "/t1",
        element:  <Alex></Alex> ,
      },
      {
        path: "/t2",
        element:   <Case></Case> ,
      },
      {
        path: "/t3",
        element:  <Jamie></Jamie>,
      },
      {
        path: "/t4",
        element:   <Taylor></Taylor>,
      },
      {
        path: "/t5",
        element:    <Jordan></Jordan>,
      },
      {
        path: "/t6",
        element:   <Morgan></Morgan> ,
      },
      {
        path: "/t7",
        element:  <Reed></Reed> ,
      },
      {
        path: "/t8",
        element:   <Quin></Quin> ,
      },
      {
        path: "/t9",
        element:   <Devin></Devin> ,
      },
      {
        path: "/book",
        element: <BookDay></BookDay> ,
      },
      {
        path: "/benifits",
        element:  <Benifits></Benifits> ,
      },
      {
        path: "/learn",
        element:   <Learn></Learn> ,
      },
     
      {
        path: "/dash",
        element:   <Dash></Dash> ,
        children: [
          {
            path: "info",
            element: <Info></Info>,
          },
          {
            path: "charts",
            element:  <Charts></Charts>,
          },
          {
            path: "coach",
            element:   <Coach></Coach> ,
          },
          {
            path: "goal",
            element:  <Goal></Goal>,
          },
          {
            path: "pay",
            element: <Payment></Payment>,
          },
          {
            path: "location",
            element:  <Location></Location>,
          },
        ],
      },
      
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
