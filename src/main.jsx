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
import More from './FitnessNetwork/More';
import Join from './FitnessNetwork/Join';
import ClientsView from './FitnessNetwork/ClientsView';
import CallUs from './servic/CallUs';
import B1 from './servic/B1';
import B2 from './servic/B2';
import B3 from './servic/B3';
import Read1 from './Blog/Read1';
import Read2 from './Blog/Read2';
import Read3 from './Blog/Read3';
import AuthContext from './firebase/AuthContext';
import PrivateRoute from './firebase/PrivateRoute';




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
        path: "/more",
        element:  <More></More> ,
      },
      {
        path: "/join",
        element:  <Join></Join> ,
      },
      {
        path: "/cv",
        element:   <ClientsView></ClientsView> ,
      },
      {
        path: "/call",
        element:   <CallUs></CallUs> ,
      },
      {
        path: "/b1",
        element:  <B1></B1> ,
      },
      {
        path: "/b2",
        element:  <B2></B2> ,
      },
      {
        path: "/b3",
        element:  <B3></B3> ,
      },
      {
        path: "/r1",
        element:  <Read1></Read1>  ,
      },
      {
        path: "/r2",
        element:  <Read2></Read2> ,
      },
      {
        path: "/r3",
        element: <Read3></Read3> ,
      },
     
      {
        path: "/dash",
        element:  <PrivateRoute>  <Dash></Dash> </PrivateRoute>  ,
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
      
    <AuthContext>
     
    <RouterProvider router={router} />

    </AuthContext>

    
  </React.StrictMode>,
)
