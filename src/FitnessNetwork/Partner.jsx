


import Marquee from "react-fast-marquee";


const Partner = () => {
    return (
        <div className=" mb-10 mt-20 ml-10 mr-10">


            <div>

             <Marquee>
             <div className=" bg-yellow-50 p-3">
               <h1 className=" text-6xl font-serif">Why <span className=" text-yellow-400">Fitness Network</span> Is Your<br></br> Ideal Fitness partner</h1>
             </div>
             </Marquee>

            

            
            <div className=" flex-col md:flex-row lg:flex-row mt-10 flex justify-center items-center  gap-56 ">


             <div className=" flex-col md:flex-row lg:flex-row">

              <div className=" flex  items-center gap-5 ">
              <img className=" h-[50px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
              <div>
                <h1 className=" text-3xl font-serif"> Cardio Equipment</h1>
                <p className=" mt-3 text-xl text-slate-500">Fitness Network  Give Best Service in Your Life</p>
              </div>
              </div>

              <div className=" flex  items-center gap-5 mt-5 ">
              <img className=" h-[50px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
              <div>
                <h1 className=" text-3xl font-serif"> Strength Training Equipment</h1>
                <p className=" mt-3 text-xl text-slate-500">Fitness Network  Give Best Service in Your Life</p>
              </div>
              </div>

              <div className=" flex  items-center gap-5 mt-5 ">
              <img className=" h-[50px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
              <div>
                <h1 className=" text-3xl font-serif"> Functional Training Areas</h1>
                <p className=" mt-3 text-xl text-slate-500">Fitness Network  Give Best Service in Your Life</p>
              </div>
              </div>


              <div className=" flex  items-center gap-5  mt-5">
              <img className=" h-[50px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
              <div>
                <h1 className=" text-3xl font-serif"> Sports Facilities</h1>
                <p className=" mt-3 text-xl text-slate-500">Fitness Network  Give Best Service in Your Life</p>
              </div>
              </div>

             </div>


             <div className=" flex-col md:flex-row lg:flex-row">
                <img className=" h-[500px] rounded-xl" src="https://img.freepik.com/free-photo/silhouette-man-gym_23-2148024304.jpg?t=st=1717651380~exp=1717654980~hmac=efc593cf00e91bfd8b59a27917d690eefea2f2ae212ea873408ac777fdc2595c&w=360" alt="" />
             </div>


            </div>









            </div>
            
        </div>
    );
};

export default Partner;