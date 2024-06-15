
import { Link } from "react-router-dom";



const About = () => {
    return (
        <div className=" mt-20 mb-10 ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">


              <div className="  animate__animated animate__bounceInLeft  animate__repeat-2    flex-col md:flex-row lg:flex-row">
                 <h1 className=" text-6xl font-serif">About Us</h1>
                 <p className=" mt-5 text-3xl font-serif">Fitness Center Information</p>
                 <p className=" text-xl text-slate-500 mt-5">Gyms are facilities equipped with a variety of exercise<br></br> equipment and amenities designed to help <br></br>individuals improve their fitness,<br></br> strength, flexibility, and overall health. They cater <br></br>to a wide range of fitness levels and goals,<br></br> from beginner to advanced athletes. Here’s <br></br>an in-depth look at what gyms typically <br></br> offer and how to make the most of your gym experience</p>

                     <Link to="/learn" >


                     <div>
                    <a href="#_" className="relative mt-5   inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Learn More </span>
                    <span className="relative invisible">Learn More </span>
                    </a>
                    </div>
                     
                     
                     </Link>
                    
              </div>

              


              <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-5">

               
               <div className=" flex-col md:flex-row lg:flex-row    mt-48">

                <div className="  animate__animated animate__bounceInDown  animate__repeat-2  bg-black text-white w-[280px] p-5 ">
                  <div className="  bg-yellow-300 w-[70px] p-3 ">
                  <img className=" h-[50px]" src="https://i.ibb.co/P4szmf9/exercise.png" alt="" />
                  </div>
                  <p className=" text-3xl font-serif mt-3">Athletics</p>
                  <p className="  text-white">Gyms are facilities equipped with <br></br> variety of exercise equipment and <br></br>amenities designed to help <br></br> improve their fitness, strength, <br></br>flexibility, and overall health. </p>
                </div>


                <div className="  animate__animated animate__bounceInLeft  animate__repeat-2 mt-5 bg-black text-white w-[280px] p-5 ">
                  <div className="  bg-yellow-300 w-[70px] p-3 ">
                  <img className=" h-[50px]" src="https://i.ibb.co/V2BCY0s/report.png" alt="" />
                  </div>
                  <p className=" text-3xl font-serif mt-3">Fitness</p>
                  <p className="  text-white">Gyms are facilities equipped with <br></br> variety of exercise equipment and <br></br>amenities designed to help <br></br> improve their fitness, strength, <br></br>flexibility, and overall health. </p>
                </div>


               </div>




               <div className=" flex-col md:flex-row lg:flex-row">

               <div className=" animate__animated animate__bounceInUp  animate__repeat-2 bg-black text-white w-[280px] p-5 ">
                 <div className="  bg-yellow-300 w-[70px] p-3 ">
                 <img className=" h-[50px]" src="https://i.ibb.co/nDj2h9t/running-1.png" alt="" />
                 </div>
                 <p className=" text-3xl font-serif mt-3">Pilates</p>
                 <p className="  text-white">Gyms are facilities equipped with <br></br> variety of exercise equipment and <br></br>amenities designed to help <br></br> improve their fitness, strength, <br></br>flexibility, and overall health. </p>
               </div>
               
               
               <div className="  animate__animated animate__bounceInRight  animate__repeat-2 mt-5 bg-black text-white w-[280px] p-5 ">
                 <div className="  bg-yellow-300 w-[70px] p-3 ">
                 <img className=" h-[50px]" src="https://i.ibb.co/ft7dWDv/grippers.png" alt="" />
                 </div>
                 <p className=" text-3xl font-serif mt-3">Jump ropes</p>
                 <p className="  text-white">Gyms are facilities equipped with <br></br> variety of exercise equipment and <br></br>amenities designed to help <br></br> improve their fitness, strength, <br></br>flexibility, and overall health. </p>
               </div>
               
               
               </div>



              </div>













            </div>
            
        </div>
    );
};

export default About;