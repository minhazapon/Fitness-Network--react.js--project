



const Join = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

        <div className="  flex-col md:flex-row lg:flex-row">

         <div className=" flex-col md:flex-row lg:flex-row flex justify-center">
             <div>
                <h1 className=" text-center text-5xl font-serif">Join Now For Free</h1>
                <div className=" flex  justify-center items-center mt-5 gap-5" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className=" text-xl text-center text-blue-600  font-serif">Join In 15 seconds</p>
                </div>
             </div>
         </div>

{/* ---------------------------------------------------- */}

          <div className=" flex justify-center mt-5">
             
             <div className=" flex-col md:flex-row lg:flex-row">

              <div>
                <p className=" text-2xl font-serif">Full Name</p>
                <input placeholder="Your Name" className=" p-1 mt-2 h-[50px] w-[350px]" type="text" />
                <p className=" h-[1px] w-[350px] bg-slate-500"></p>
              </div>


              <div className=" mt-5">
                <p className=" text-2xl font-serif">Your Email</p>
                <input  placeholder="Your Email" className=" p-1 mt-2 h-[50px] w-[350px]" type="email" name="email" id="" />
                <p className=" h-[1px] w-[350px] bg-slate-500"></p>
              </div>

             </div>

          </div>


{/* ---------------------------------------------------- */}
            

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center   mt-5 ">
            <div className=" flex justify-start items-center  gap-16">
            <div>
              <h1 className=" text-xl font-serif">Gender</h1>
            </div>
            <div className=" flex items-center gap-3">
              <input className=" border-[1px] border-black" type="checkbox" name="box" id="" />
              <p  className=" text-xl font-serif" >Male</p> 
            </div>
            <div className=" flex items-center gap-3">
              <input className=" border-[1px] border-black" type="checkbox" name="box" id="" />
              <p  className=" text-xl font-serif" >Female</p> 
            </div>
            </div>
            </div>

{/* --------------------------------------------------------------- */}

            <div className=" flex-col md:flex-row lg:flex-row mt-5 flex justify-center">

            <div>
              <input placeholder="Date Of Birth" className=" p-1 mt-2 h-[50px] w-[350px]" type="date" name="date" id="" />
              <p className=" h-[1px] w-[350px] bg-slate-500"></p>
            </div>


            </div>
            
            <div>
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center mt-5">
              <input className=" btn bg-black text-white p-1 mt-2 h-[50px] w-[350px]" type="submit" value="Join Now Free" />
            </div>


            </div>
            
        </div>
        
    </div>
    );
};

export default Join;