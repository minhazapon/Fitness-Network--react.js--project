import { Link } from "react-router-dom";



const SerBanner = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

         
            <div className=" text-center    p-10">
                <h1 className="text-6xl font-serif">Fitness <span className=" text-yellow-400">Network</span> Center</h1>
                <p className=" text-xl font-serif mt-5">"Exercise not only changes your body, it changes your mind, your attitude, and your mood." – Unknown</p>


                    <Link to="/call" > 
                    <div>
                    <a href="#_" className=" animate__animated animate__bounceInDown animate__repeat-2      relative  mt-5  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Call Us</span>
                    <span className="relative invisible">Call Us</span>
                    </a>
                    </div>  
                    
                    
                    </Link>
                    
              
                
            </div>
            <div className=" flex justify-center mt-5">
            <div className=" h-[1px] w-[1000px] bg-black"></div>
            </div>



            
        </div>
    );
};

export default SerBanner;