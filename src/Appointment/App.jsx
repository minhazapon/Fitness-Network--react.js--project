
import { Link } from "react-router-dom";


const App = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row">

            


              <div className="  flex-col md:flex-row lg:flex-row bg-black text-white p-10 ">
               <h1 className="  text-5xl font-serif">Make An<br></br> Appointment</h1>
               <p className="  text-xl mt-5 font-serif text-slate-500">Setting a gym appointment<br></br> is a great way to stay<br></br> committed to your fitness goals.<br></br> Here's a step-by-step<br></br> guide to help you schedule one</p>

               
                
               <Link to="/contact" >
               <button className=" mt-5  w-[150px] bg-white text-black  btn">Contact</button>
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


           
              
            
        </div>
    );
};

export default App;