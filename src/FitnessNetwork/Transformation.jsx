import { Link } from "react-router-dom";




const Transformation = () => {
    return (
        <div className="  mb-10 mt-20 ml-10 mr-10">

            <div>
             

             <div className=" bg-yellow-50 p-5  flex-col md:flex-row lg:flex-row flex justify-center items-center  gap-52">
              <h1 className=" text-5xl font-serif"><span className=" text-yellow-400">Transformation</span> Speak<br></br> Louder Than Word </h1>

                    <Link to="/cv" >
                    
                    <div>
                    <a href="#_" className="relative    inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">View More</span>
                    <span className="relative invisible">View More</span>
                    </a>
                    </div>  


                    </Link>
                    
                
            
             </div>














            </div>
            
        </div>
    );
};

export default Transformation;