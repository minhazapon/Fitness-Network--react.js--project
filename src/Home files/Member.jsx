



const Member = () => {
    return (
        <div className=" mb-10 mt-20 ml-10 mr-10">
              

             <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 ">


             <div className="  flex-col md:flex-row lg:flex-row  bg-yellow-300   p-16">
                <p className=" text-5xl font-serif">Membership<br></br>
                 With Benefits</p>
                 <button className=" mt-20 btn bg-black text-white border-[1px] border-yellow-400">Membership
                 Benefits</button>
            </div>
            <div className=" flex-col md:flex-row lg:flex-row  ">
                <img className="   h-[350px] w-[550px]" src="https://img.freepik.com/premium-photo/group-young-sporty-people-sitting-lotus-pose_762785-168368.jpg?w=740" alt="" />
            </div>
                
            
            </div> 

            
            
        </div>
    );
};

export default Member;