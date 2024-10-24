import { Link, NavLink } from "react-router-dom";

// ---------------theme
import { useContext, useEffect, useState } from 'react'
// -----------------------------------------


import 'animate.css';

import MovingText from 'react-moving-text'
import { fireContext } from "./firebase/AuthContext";


const Nav = () => {


    const {user, logOut} = useContext(fireContext)

    const handleOut = () => {
      logOut()
      .then(() => console.log('logOut successfully'))
      .catch( error => 
        console.error(error)
      )
    
     }





  
  // ------------------------------------theme
const [theme, setTheme] = useState('light')
  
// update state on toggle
const handleToggle = e => {
  if (e.target.checked) {
    setTheme('synthwave')
  } else {
    setTheme('light')
  }
}

// set theme state in localStorage on mount & also update localStorage on state change
useEffect(() => {
  localStorage.setItem('theme', theme)
  const localTheme = localStorage.getItem('theme')

  // add custom data-theme attribute
  document.querySelector('html').setAttribute('data-theme', localTheme)
}, [theme])
// --------------------------------------

   const  fit = <>
       
      
      <div className="tooltip" data-tip="Home">
      <li><NavLink to="/" >Home</NavLink></li>
      </div>
      <div className="tooltip" data-tip="FitNetwork">
      <li><NavLink to="/fit" >FitNetwork</NavLink></li>
      </div>
      { user && <> 
      
        <div className="tooltip" data-tip="Service">
      <li><NavLink to="/service" >Service</NavLink></li>
      </div>
      <div className="tooltip" data-tip="Products">
      <li><NavLink to="/products" >Products</NavLink></li>
      </div>
      <div className="tooltip" data-tip="Trainer">
      <li><NavLink to="/train" >Trainer</NavLink></li>
      </div>
      <div className="tooltip" data-tip="Blog">
      <li><NavLink to="/blog" >Blog</NavLink></li>
      </div>
      <div className="tooltip" data-tip="Appointment">
      <li><NavLink to="/app" >Appointment</NavLink></li>
      </div>
      <div className="tooltip" data-tip="Gallery">
      <li><NavLink to="/gal" >Gallery</NavLink></li>
      </div>
      <div className="tooltip" data-tip="Dashboard">
      <li><NavLink to="/dash" >Dashboard</NavLink></li>
      </div>
      
      
       </> }
       
  
       
       
     
      
       
       
   </>
    return (
        <div  className=" mt-4">
            <div className="navbar shadow-md bg-base-100  p-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        {fit}
        
      </ul>
    </div>
     
     <div className=" flex items-center gap-2">
       
     <img className=" animate__animated animate__lightSpeedInLeft  animate__repeat-2 h-[50px]" src="https://i.ibb.co/mBQWDSX/running.png" alt="" />
             
             
      <MovingText
        type="swing"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="5"
        fillMode="none">
       <a className=" text-2xl  font-serif ">Fitness <span className=" text-yellow-400">Network</span></a>
      </MovingText>
           
            
    

     </div>
    


  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {fit}
      
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-2 ">



   {/* ---------------------theme */}
   <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
    
    <span className="relative">
      <input onChange={handleToggle} id="Toggle1"  type="checkbox" className="hidden peer" />
      <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
    </span>
    
    </label>
    {/* ------------------------------------                      */}
    


    { user ? <>
       
      <a onClick={handleOut} href="#_" className="relative  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">SignOut</span>
      <span className="relative invisible">SignOut</span>
      </a>
    
    </>:

    <Link to="/login">
    <div>
    <a href="#_" className="relative  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">login</span>
    <span className="relative invisible">login</span>
    </a>
    </div></Link>   



    }
    
     


 







                   

    
  </div>
</div>
            
        </div>
    );
};

export default Nav;