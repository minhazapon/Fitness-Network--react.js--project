

import { Link } from "react-router-dom";


 

const Banner = () => {
    return (
        <div className=" mb-10 ml-10  mt-10 mr-10">

            <div>
             
              
            


                 <div className=" rounded-xl flex-col md:flex-row lg:flex-row  flex justify-center items-center bg-cover bg-no-repeat  p-32 "
                 
                 style={{backgroundImage: 'url(   https://img.freepik.com/premium-photo/portrait-muscled-athlete-bodybuilder-workouts-alone-sport-gym-indoors_489646-18891.jpg?w=740  )'}}
                 
                 
                 >

                    <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r from-black  p-10 text-white">
                    <h1 className=" text-5xl font-serif ">Fitness</h1>
                    <img className=" h-[100px]" src="https://i.ibb.co/yP6B98t/gym.png" alt="" />
                    <p className=" text-5xl font-serif mt-10">WelCome To Fitness Network</p>
                      

                    <Link to="/book" >
                    <div>
                    <a href="#_" className="relative mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Book A Tour Day</span>
                    <span className="relative invisible">Book A Tour Day</span>
                    </a>
                    </div>
                    </Link>  
                    
                   


                    </div>

                   
                   

                 </div>



                  

       





            </div>


            
        </div>
    );
};

export default Banner;