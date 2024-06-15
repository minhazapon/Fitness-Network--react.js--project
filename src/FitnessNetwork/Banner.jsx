


import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="    mb-10 mt-10  ml-10 mr-10">

            {/* <div className=" flex-col md:flex-row lg:flex-row rounded-xl bg-no-repeat bg-cover  p-40"
            
            style={{backgroundImage: 'url(  https://img.freepik.com/premium-photo/strong-confident-man-standing-gym-athletic-young-workout-sportsman_116317-23937.jpg?w=740   )'}}
            >

           
             <div className=" flex-col md:flex-row lg:flex-row text-white bg-gradient-to-r from-black  p-5">
               <h1 className=" text-6xl font-serif">ACHIEVE MORE<br></br> THAN JUST FITNESS</h1>
               <p className=" mt-5 text-xl font-serif">"The pain you feel today will be the strength you feel tomorrow."</p>
               <div className=" mt-5 flex items-center gap-5 ">
                <button className=" btn bg-yellow-400 ">Start Now</button>
                <button className=" border-[1px] border-yellow-400 rounded-xl  btn">Join Free trial</button>
               </div>
             </div>
            

            </div> */}


            <div>

            <div className="hero min-h-screen  bg-fixed " style={{backgroundImage: 'url(    https://img.freepik.com/premium-photo/strong-confident-man-standing-gym-athletic-young-workout-sportsman_116317-23937.jpg?w=740      )'}}>
              <div className=" bg-opacity-60"></div>
              <div className=" animate__animated animate__flip animate__repeat-2 text-center text-neutral-content">
              <div className=" flex-col md:flex-row lg:flex-row text-white bg-gradient-to-r from-black  p-10">
               <h1 className=" text-6xl font-serif">ACHIEVE MORE<br></br> THAN JUST FITNESS</h1>
               <p className=" mt-5 text-xl font-serif">"The pain you feel today will be the strength you feel tomorrow."</p>
               <div className=" mt-5 flex items-center gap-5 ">

                    
                    <Link to="/more" >
                    
                    <div>
                    <a href="#_" className="relative    inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Learn More </span>
                    <span className="relative invisible">Learn More </span>
                    </a>
                    </div>    


                    </Link>
                    
                    
                    <Link to="/join" >
                    <div>
                    <a href="#_" className="relative    inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Join Free trial </span>
                    <span className="relative invisible">Join Free trial</span>
                    </a>
                    </div>  
                    
                    
                    </Link>
                    
                    
               </div>
             </div>
              </div>
            </div>








            </div>




            
        </div>
    );
};

export default Banner;