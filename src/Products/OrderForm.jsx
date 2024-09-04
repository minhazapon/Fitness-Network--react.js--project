
//text
const OrderForm = () => {



    return (
        <div className=" flex justify-center  mt-10 mb-10 ml-5 mr-5  ">

            <div className="  border-[1px] border-[#3DC2EC] w-[900px] p-10 rounded-xl">

            
            <div>
                <p className=" text-7xl font-mono font-bold text-center text-black ">Order<span className=" text-[#3DC2EC]">Now</span></p>
                <p className=" text-2xl font-mono text-black text-center mt-5">Any questions or remarks? Just write us a message!</p>
            </div>

            
            {/* ---------------------- */}
            
            <form>

            <div className=" flex justify-center mt-10">


            <div className=" text-[#3DC2EC] grid  md:grid-cols-2 gap-5">
            
            
             <div>
               <p className=" text-black text-xl font-mono">Name</p>
               <input placeholder="Enter Your Name" required name="Name" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
             </div>
            
             
             <div>
               <p className=" text-black text-xl font-mono">Email</p>
               <input placeholder="Enter Your Email" required name="Email" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="email" id="" />
             </div>
             <div>
               <p className=" text-black text-xl font-mono">Message</p>
               <textarea placeholder="Enter Your Message" required name="Message" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" id=""></textarea>
             </div>
             <div>
               <p className=" text-black text-xl font-mono">ProductsName</p>
               <input placeholder="Enter Your ProductsName" required name="ProductsName" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
             </div>
             <div>
               <p className=" text-black text-xl font-mono">PayNumber</p>
               <input placeholder="Enter Your PayNumber" required name="PayNumber" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
             </div>
             <div>
               <p className=" text-black text-xl font-mono">Phone</p>
               <input placeholder="Enter Your Phone" required name="Phone" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
             </div>
            
            
            </div>
                        
            </div>

            <div className=" flex justify-center">
                <button className=" w-full mt-5  bg-black text-white btn  font-mono ">Order</button>
            </div>

            </form>

            

            </div>
            
        </div>
    );
};

export default OrderForm;