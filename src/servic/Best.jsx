import { Link } from "react-router-dom";



const Best = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div className=" ">

            <div className=" flex-col md:flex-row lg:flex-row text-center ">
               <h1 className=" text-6xl font-serif">Best Service</h1>
               <p className=" text-xl font-serif mt-5">"Push yourself because no one else is going to do it for you."
               </p>
            </div>


            {/* ------------------------------------------------------ */}

            <div className="  flex-col md:flex-row lg:flex-row flex justify-center items-center  gap-10 mt-10">


            <div className=" shadow-xl border-[1px] border-black  h-[340px] w-[250px] p-5">
              <img className="  h-[50px]" src="https://i.ibb.co/CzGdDBx/gym-equipment.png" alt="" />  
             <h1 className=" mt-5 text-2xl font-serif">Fitness Equipment</h1>
             <p className=" mt-5  text-slate-500 font-serif">We Provide Best<br></br> Fitness Equipment join <br></br>with Us and gain<br></br> Dynamic Fitness</p>



                   <Link to="/b1" >
                   <div>
                    <a href="#_" className="relative   mt-5  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Read More </span>
                    <span className="relative invisible">Read More</span>
                    </a>
                    </div>  
                   
                   </Link>
                   
            
            </div>


            <div className=" shadow-xl border-[1px] border-black h-[340px] w-[250px] p-5 ">
              <img className="  h-[50px]" src="https://i.ibb.co/CnD9cfr/fitness-center.png" alt="" />  
             <h1 className=" mt-5 text-2xl font-serif">Fitness Facilities</h1>
             <p className=" mt-5  text-slate-500 font-serif">We Provide Best<br></br> Fitness Facilities join <br></br>with Us and gain<br></br> Dynamic Fitness</p>

                    <Link to="/b2" >

                    <div>
                    <a href="#_" className="relative   mt-5  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Read More </span>
                    <span className="relative invisible">Read More</span>
                    </a>
                    </div> 
                    
                    
                    </Link>
                    
                    
                                 </div>


            <div className=" shadow-xl border-[1px] border-black h-[340px] w-[250px] p-5 ">
              <img className="  h-[50px]" src="https://i.ibb.co/hBtvqGt/man.png" alt="" />  
             <h1 className=" mt-5 text-2xl font-serif">Health and Safety</h1>
             <p className=" mt-5  text-slate-500 font-serif">We Provide Best<br></br> Health and Safety join <br></br>with Us and gain<br></br> Dynamic Fitness</p>


                   <Link to="/b3" >
                   
                   <div>
                    <a href="#_" className="relative   mt-5  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Read More </span>
                    <span className="relative invisible">Read More</span>
                    </a>
                    </div> 
                   
                   </Link>
                    
                    
                    
                    
                                 </div>


















            </div>













            </div>
            
        </div>
    );
};

export default Best;