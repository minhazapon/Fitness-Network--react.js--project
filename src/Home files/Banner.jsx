


 

const Banner = () => {
    return (
        <div className=" mb-10 ml-10  mt-10 mr-10">

            <div>
             
              
            


                 <div className=" flex-col md:flex-row lg:flex-row  flex justify-center items-center bg-cover bg-no-repeat  p-32 "
                 
                 style={{backgroundImage: 'url(   https://img.freepik.com/premium-photo/portrait-muscled-athlete-bodybuilder-workouts-alone-sport-gym-indoors_489646-18891.jpg?w=740  )'}}
                 
                 
                 >

                    <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r from-black  p-10 text-white">
                    <h1 className=" text-5xl font-serif ">Fitness</h1>
                    <img className=" h-[100px]" src="https://i.ibb.co/yP6B98t/gym.png" alt="" />
                    <p className=" text-5xl font-serif mt-10">WelCome To Fitness Network</p>
                    <button className=" p-3 mt-14 font-serif border-[1px]  border-yellow-400">Book A Tour Day</button>
                    </div>
                   

                 </div>






       





            </div>


            
        </div>
    );
};

export default Banner;