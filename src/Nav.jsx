import { NavLink } from "react-router-dom";



const Nav = () => {

   const  fit = <>
       
       <li><NavLink to="/" >Home</NavLink></li>
       <li><NavLink to="/About" >About us</NavLink></li>
       <li><NavLink to="/service" >Service</NavLink></li>
       <li><NavLink to="/gym" >Gym</NavLink></li>
       <li><NavLink to="/products" >Products</NavLink></li>
       <li><NavLink to="/trainer" >Trainer</NavLink></li>
       <li><NavLink to="/blog" >Blog</NavLink></li>
   </>
    return (
        <div>
            <div className="navbar shadow-md bg-base-100">
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
       
     <img className=" h-[50px]" src="https://i.ibb.co/mBQWDSX/running.png" alt="" />
    <a className=" text-2xl  font-serif ">Fitness <span className=" text-yellow-400">Network</span></a>

     </div>
    


  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {fit}
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-black text-white ">login</a>
  </div>
</div>
            
        </div>
    );
};

export default Nav;