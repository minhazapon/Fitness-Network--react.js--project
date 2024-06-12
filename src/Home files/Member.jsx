



const Member = () => {
    return (
        <div className=" mb-10 mt-20 ml-10 mr-10">
              

             <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 ">


             <div className="  flex-col md:flex-row lg:flex-row  bg-yellow-300   p-16">
                <p className=" text-5xl font-serif">Membership<br></br>
                 With Benefits</p>
                
                    <div>
                    <a href="#_" className="relative mt-20   inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Membership
                    Benefits  </span>
                    <span className="relative invisible">Membership
                    Benefits  </span>
                    </a>
                    </div>

            </div>
            <div className=" flex-col md:flex-row lg:flex-row  ">
                <img className="   h-[350px] w-[550px]" src="https://img.freepik.com/premium-photo/group-young-sporty-people-sitting-lotus-pose_762785-168368.jpg?w=740" alt="" />
            </div>
                
            
            </div> 

            
            
        </div>
    );
};

export default Member;