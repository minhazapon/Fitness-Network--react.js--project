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
import OrderForm from './Products/OrderForm';
import PathForm from './FitnessNetwork/PathForm';
import PlanForm from './FitnessNetwork/PlanForm';




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
        element: <PrivateRoute><Service></Service></PrivateRoute>    ,
      },
      {
        path: "/products",
        element: <PrivateRoute><ProductsMother></ProductsMother></PrivateRoute>    ,
      },
      {
        path: "/login",
        element:     <Login></Login> ,
      },
      {
        path: "/up",
        element: <SignUp></SignUp> ,
      },
      {
        path: "/gal",
        element:  <PrivateRoute><Gallery></Gallery></PrivateRoute>   ,
      },
      {
        path: "/app",
        element:  <PrivateRoute><App></App></PrivateRoute>   ,
      },
      {
        path: "/contact",
        element:  <PrivateRoute><Contact></Contact></PrivateRoute>    ,
      },
      {
        path: "/blog",
        element:  <PrivateRoute> <Blog></Blog></PrivateRoute>   ,
      },
      {
        path: "/train",
        element:  <PrivateRoute><Trainer></Trainer></PrivateRoute>    ,
      },
      {
        path: "/t1",
        element: <PrivateRoute><Alex></Alex></PrivateRoute>    ,
      },
      {
        path: "/t2",
        element:  <PrivateRoute><Case></Case></PrivateRoute>    ,
      },
      {
        path: "/t3",
        element:  <PrivateRoute><Jamie></Jamie></PrivateRoute>  ,
      },
      {
        path: "/t4",
        element:  <PrivateRoute> <Taylor></Taylor></PrivateRoute>   ,
      },
      {
        path: "/t5",
        element:  <PrivateRoute><Jordan></Jordan></PrivateRoute>    ,
      },
      {
        path: "/t6",
        element:  <PrivateRoute><Morgan></Morgan></PrivateRoute>    ,
      },
      {
        path: "/t7",
        element:  <PrivateRoute><Reed></Reed></PrivateRoute>   ,
      },
      {
        path: "/t8",
        element:  <PrivateRoute><Quin></Quin></PrivateRoute>    ,
      },
      {
        path: "/t9",
        element:  <PrivateRoute> <Devin></Devin></PrivateRoute>   ,
      },
      {
        path: "/book",
        element: <PrivateRoute><BookDay></BookDay></PrivateRoute>   ,
      },
      {
        path: "/benifits",
        element: <PrivateRoute><Benifits></Benifits></PrivateRoute>    ,
      },
      {
        path: "/learn",
        element: <PrivateRoute> <Learn></Learn></PrivateRoute>    ,
      },
      {
        path: "/more",
        element: <PrivateRoute><More></More></PrivateRoute>    ,
      },
      {
        path: "/join",
        element:  <PrivateRoute><Join></Join></PrivateRoute>   ,
      },
      {
        path: "/cv",
        element: <PrivateRoute><ClientsView></ClientsView></PrivateRoute>     ,
      },
      {
        path: "/call",
        element:  <PrivateRoute><CallUs></CallUs></PrivateRoute>    ,
      },
      {
        path: "/b1",
        element: <PrivateRoute><B1></B1></PrivateRoute>    ,
      },
      {
        path: "/b2",
        element: <PrivateRoute> <B2></B2></PrivateRoute>   ,
      },
      {
        path: "/b3",
        element:  <PrivateRoute> <B3></B3></PrivateRoute>  ,
      },
      {
        path: "/r1",
        element: <PrivateRoute><Read1></Read1></PrivateRoute>     ,
      },
      {
        path: "/r2",
        element: <PrivateRoute><Read2></Read2></PrivateRoute>    ,
      },
      {
        path: "/r3",
        element: <PrivateRoute><Read3></Read3></PrivateRoute>   ,
      },
      {
        path: "/orderForm",
        element:  <PrivateRoute><OrderForm></OrderForm></PrivateRoute>   ,
      },
      {
        path: "/pathForm",
        element:  <PrivateRoute><PathForm></PathForm></PrivateRoute>    ,
      },
      {
        path: "/planForm",
        element: <PrivateRoute><PlanForm></PlanForm> </PrivateRoute>       ,
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
