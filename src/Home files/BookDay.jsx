

const BookDay = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">


            <div className=" flex justify-center">


               <div className=" flex-col md:flex-row lg:flex-row bg-black p-5 ">
              
                    <h1 className=" text-5xl text-white font-serif">Book Your Day</h1>

                    <div className=" grid  md:grid-cols-2 gap-2 mt-2 ">
                       <input placeholder="First Name" className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" />
                       <input placeholder="Last Name" className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" />
                       <input  className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" placeholder="Number" type="number" name="number" id="" />
                       <input className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" placeholder="email" type="email" name="email" id="" />
                       <input placeholder="Visit Day" className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" />
                       <input className=" btn   bg-black text-white p-2 h-[50px] w-[250px] border-[1px] border-white rounded-lg" type="submit" value="Book" />


                    </div>




               </div>













            </div>
            
        </div>
    );
};

export default BookDay;