
import { Link } from "react-router-dom";
import Date from "./Date";





const App = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row">

            


              <div className="  flex-col md:flex-row lg:flex-row bg-black text-white p-10 ">
               <h1 className="  text-5xl font-serif">Make An<br></br> Appointment</h1>
               <p className="  text-xl mt-5 font-serif text-slate-500">Setting a gym appointment<br></br> is a great way to stay<br></br> committed to your fitness goals.<br></br> Here's a step-by-step<br></br> guide to help you schedule one</p>

               
                
               <Link to="/contact" >

               <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">Contact</span>
                    <span className="relative invisible">Contact</span>
                    </a>
                    </div>    


               </Link>
              

              </div>


{/* ------------------------------------------------------------------ */}


            <div className="  flex-col md:flex-row lg:flex-row flex justify-center   gap-36 ">


             <div className="    mb-24 mt-3  flex-col md:flex-row lg:flex-row flex items-center gap-3">
               <img className=" h-[100px]" src="https://i.ibb.co/ZX0LJCS/schedule-1.png" alt="" />
               <img className=" h-[100px]" src="https://i.ibb.co/3BT9bvC/back-in-time.png" alt="" />
               <img className=" h-[100px]" src="https://i.ibb.co/zHztQKQ/application.png" alt="" />
               <img className=" h-[100px]" src="https://i.ibb.co/44BZhpf/chat-bubble.png" alt="" />
             </div>


             <div className="   flex-col md:flex-row lg:flex-row border-[1px] border-black  bg-white  p-5  rounded-xl  -mt-52 ">

                <form>

                <h1 className=" text-5xl text-center  mt-5">Its Quick & Easy</h1>

                <div className="  flex-col md:flex-row lg:flex-row   mt-5">
                <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-3">
                <input placeholder="First Name" className=" p-1   border-[1px] border-black" type="text" />
                <input placeholder="Last Name" className="  p-1   border-[1px] border-black" type="text" />
                </div>  
                <div className=" flex-col md:flex-row lg:flex-row mt-2">
                     {/* <textarea placeholder=" Message" className=" border-[1px] border-black w-[395px]   h-[150px] " name="" id=""></textarea> */}


                <label className="block">
				<textarea rows="3"  placeholder="Message" className="block border-[1px] p-2 border-black  h-[150px] w-full rounded-md 
                  dark:bg-gray-100"></textarea>
		      	</label> 


                </div>
                <div className="  mt-3 flex-col md:flex-row lg:flex-row flex items-center gap-3">
                <input  className=" p-1  border-[1px] border-black" type="date" name="time" id="" />
                <input placeholder="Coach Name" className=" w-[236px]  p-1  border-[1px] border-black" type="text" />
                </div> 
                {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button> */}
               
                </div>

                  
                  <div className=" flex justify-center">
                  <input className=" bg-black text-white w-[300px] btn mt-5" type="submit" value="Book" />

                  </div>
                </form>

             </div>
            </div>
            </div>

    {/* ---------------------------------------------------- */}

           <div className=" flex justify-center mt-20">
           <Date></Date>

           </div>
      
              
            
        </div>
    );
};

export default App;