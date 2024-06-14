



const Clients = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div className="  flex-col md:flex-row lg:flex-row ">

                 <div  className="  flex-col md:flex-row lg:flex-row flex  justify-center items-center gap-10">
 
                 <div className=" border-[1px]   border-b-slate-500 bg-black text-white rounded-xl  p-2">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src="  https://img.freepik.com/premium-photo/muscular-african-american-young-man-gym-showing-muscles-fitness-model-trains-gym_641698-1812.jpg?w=740  " className=" w-[200px] h-[300px] rounded-lg shadow-2xl" />
                    <div>
                      <p className="py-6">I've been a member of [Fitness Network]<br></br> for [one year], and I can <br></br> confidently say it’s one<br></br>  of the best gyms I've ever joined.<br></br>  Here are some of the reasons why<br></br>  I highly recommend this gym</p>
                      <div className=" mb-10 rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                      <h1 className=" text-4xl font-serif">John</h1>
                    </div>
                  </div>
                </div>




                 <div className="border-[1px] flex-col md:flex-row lg:flex-row  border-b-slate-500 bg-black text-white rounded-xl  p-2">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src="  https://img.freepik.com/premium-photo/portrait-bodybuilder-with-dumbbells-his-arms-grey-backg_136403-519.jpg?w=360  " className="w-[200px] h-[300px] rounded-lg shadow-2xl" />
                    <div>
                      <p className="py-6">I've been a member of [Fitness Network]<br></br> for [one year], and I can <br></br> confidently say it’s one<br></br>  of the best gyms I've ever joined.<br></br>  Here are some of the reasons why<br></br>  I highly recommend this gym</p>
                      <div className=" mb-10 rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                      <h1 className=" text-4xl font-serif">James</h1>
                    </div>
                  </div>
                </div>











                 </div>


{/* ------------------------------------------------------------------------------------- */}






            </div>
            
        </div>
    );
};

export default Clients;