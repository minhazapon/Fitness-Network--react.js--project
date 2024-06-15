

import { Link } from "react-router-dom";


const Journey = () => {
    return (
        <div className=" mb-10 mt-20 ml-9 ">


            

            <div className=" flex justify-end bg-no-repeat bg-cover  p-36 text-white bg-fixed "
             
             style={{backgroundImage: 'url(  https://img.freepik.com/premium-photo/silhouette-man-boxing_23-2148024354.jpg?w=740  )'}}
            
            
            >

            <div className=" bg-gradient-to-r from-black  p-5">
                <h1 className=" text-5xl font-serif">Ready To Start Your<br></br> Journey With<br></br> <span className=" text-yellow-400">Fitness Network</span></h1>
                <p className=" mt-5 text-xl">Ready To Join With Us</p>
                    
                    <Link to="/join" >


                    <div>
                    <a href="#_" className="relative  mt-5  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Join Now</span>
                    <span className="relative invisible">Join Now</span>
                    </a>
                    </div>  
                    
                    
                    </Link>
                    
              
            </div>


            </div>
            
        </div>
    );
};

export default Journey;