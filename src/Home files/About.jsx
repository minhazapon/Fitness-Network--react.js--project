



const About = () => {
    return (
        <div className=" mt-20 mb-10 ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">


              <div className=" flex-col md:flex-row lg:flex-row">
                 <h1 className=" text-6xl font-serif">About Us</h1>
                 <p className=" mt-5 text-3xl font-serif">Fitness Center Information</p>
                 <p className=" text-xl text-slate-500 mt-5">Gyms are facilities equipped with a variety of exercise<br></br> equipment and amenities designed to help <br></br>individuals improve their fitness,<br></br> strength, flexibility, and overall health. They cater <br></br>to a wide range of fitness levels and goals,<br></br> from beginner to advanced athletes. Here’s <br></br>an in-depth look at what gyms typically <br></br> offer and how to make the most of your gym experience</p>
                 <button className=" mt-5 btn bg-black text-white ">Learn More</button>
              </div>

              


              <div className=" flex-col md:flex-row lg:flex-row flex items-center gap-5">

               
               <div className=" flex-col md:flex-row lg:flex-row    mt-48">

                <div className=" bg-black text-white w-[280px] p-5 ">
                  <div className="  bg-yellow-300 w-[70px] p-3 ">
                  <img className=" h-[50px]" src="https://i.ibb.co/P4szmf9/exercise.png" alt="" />
                  </div>
                  <p className=" text-3xl font-serif mt-3">Athletics</p>
                  <p className="  text-white">Gyms are facilities equipped with <br></br> variety of exercise equipment and <br></br>amenities designed to help <br></br> improve their fitness, strength, <br></br>flexibility, and overall health. </p>
                </div>


                <div className=" mt-5 bg-black text-white w-[280px] p-5 ">
                  <div className="  bg-yellow-300 w-[70px] p-3 ">
                  <img className=" h-[50px]" src="https://i.ibb.co/V2BCY0s/report.png" alt="" />
                  </div>
                  <p className=" text-3xl font-serif mt-3">Fitness</p>
                  <p className="  text-white">Gyms are facilities equipped with <br></br> variety of exercise equipment and <br></br>amenities designed to help <br></br> improve their fitness, strength, <br></br>flexibility, and overall health. </p>
                </div>


               </div>




               <div className=" flex-col md:flex-row lg:flex-row">

               <div className=" bg-black text-white w-[280px] p-5 ">
                 <div className="  bg-yellow-300 w-[70px] p-3 ">
                 <img className=" h-[50px]" src="https://i.ibb.co/nDj2h9t/running-1.png" alt="" />
                 </div>
                 <p className=" text-3xl font-serif mt-3">Pilates</p>
                 <p className="  text-white">Gyms are facilities equipped with <br></br> variety of exercise equipment and <br></br>amenities designed to help <br></br> improve their fitness, strength, <br></br>flexibility, and overall health. </p>
               </div>
               
               
               <div className=" mt-5 bg-black text-white w-[280px] p-5 ">
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