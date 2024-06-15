

import { Link } from "react-router-dom";

const Trainer = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>

            <div className=" flex-col md:flex-row lg:flex-row rounded-xl bg-black  text-white  text-center p-5 ">
             <h1 className=" text-6xl font-serif">  Meet Our Trainers</h1>
             <p className=" mt-5 text-xl font-serif ">Better body, better life.</p>
             <hr className=" mt-5 "></hr>
            </div>
            
{/* --------------------------------------------------------------- */}

            <div className="  flex justify-center mt-10">

            <div className="  grid  md:grid-cols-3 gap-5">



            <div className="  animate__animated  animate__jackInTheBox animate__repeat-2  border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/robust-instructor-leads-dumbbell-training-karate-gym-generative-ia_209190-46217.jpg?w=740" alt="" />
                <h1 className=" text-xl font-bold mt-3">Alex Thompson</h1>
                <p className=" text-slate-400 ">Strength Training Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                
                <Link to="/t1" >
                    <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    

                </Link>
                
               </div>




               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2 border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/free-photo/one-athletic-man-exercising-outdoors-confident-determined-generated-by-artificial-intelligence_188544-130258.jpg?t=st=1718167864~exp=1718171464~hmac=d73045b5f8c1b2e4b5372c8fb91f51288ea186fc926956a3c72e309610aa4643&w=826" alt="" />
                <h1 className=" text-xl font-bold mt-3">Casey Rivera</h1>
                <p className=" text-slate-400 ">Cardiovascular Training Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t2" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>




               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2 border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/free-photo/portrait-indigenous-person-integrated-into-modern-life_23-2151102539.jpg?t=st=1718167941~exp=1718171541~hmac=76c751fe493fd09579d4800ae5a346e0679b4865d2f53a22208c8ab75be109f1&w=826" alt="" />
                <h1 className=" text-xl font-bold mt-3">Jamie Parker</h1>
                <p className=" text-slate-400 ">Flexibility and Mobility Training Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t3" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>




               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2 border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/free-photo/medium-shot-man-with-braids-portrait_23-2151428153.jpg?t=st=1718168006~exp=1718171606~hmac=af1b78c476b9ba0f26b4c7c4fe6b47381d5b4394bd528fc56f3176a559b81f7c&w=740" alt="" />
                <h1 className=" text-xl font-bold mt-3">Taylor Brooks</h1>
                <p className=" text-slate-400 ">Endurance Training Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t4" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>




               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2 border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/man-gym_812426-296554.jpg?w=740" alt="" />
                <h1 className=" text-xl font-bold mt-3">Jordan Lee</h1>
                <p className=" text-slate-400 ">Sports-Specific Training Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t5" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>



 
               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2 border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/high-definition-photographic-creative-image-spartan_993236-28139.jpg?w=826" alt="" />
                <h1 className=" text-xl font-bold mt-3">Riley Morgan</h1>
                <p className=" text-slate-400 ">Rehabilitation and Recovery Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t6" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>



               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2 border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/man-gym_812426-301744.jpg?w=740" alt="" />
                <h1 className=" text-xl font-bold mt-3">Avery Reed</h1>
                <p className=" text-slate-400 ">Functional Training Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t7" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>



               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2 border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/crossfit-athlete-raises-weights-intense-environment-generative-ia_209190-91447.jpg?w=740" alt="" />
                <h1 className=" text-xl font-bold mt-3">Quinn Turner</h1>
                <p className=" text-slate-400 ">Group Fitness Classes Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t8" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>



               <div className="  animate__animated  animate__jackInTheBox animate__repeat-2   border-[1px]  border-b-slate-500   rounded-xl p-5 ">
                 <img className=" h-[200px] w-[300px] rounded-xl" src="https://img.freepik.com/premium-photo/bodybuilder-intense-gym-training-generative-ia_209190-91808.jpg?w=740" alt="" />
                <h1 className=" text-xl font-bold mt-3">Devin Cooper</h1>
                <p className=" text-slate-400 ">Running Training Specialist</p>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div> 
                <div className=" flex items-center gap-2 mt-3">
                    <img className=" h-[25px]" src="https://i.ibb.co/Jn25NsW/gym-5.png" alt="" />
                    <h1 className="  text-slate-500">Fitness Network</h1>
                 </div> 
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">New York, America</h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                 </svg>
                    <h1 className="  text-slate-500">Available On Time </h1>
                 </div>
                 <div className=" flex items-center gap-2 mt-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                    <h1 className="  text-slate-500">$300</h1>
                 </div>
                 <Link to="/t9" >
                 <div>
                    <a href="#_"  className="relative  mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-blue-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full  text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View profile</span>
                    <span className="relative invisible">View profile</span>
                    </a>
                    </div>    
                </Link>
               </div>





        
            </div>



            </div>



            </div>
            
        </div>
    );
};

export default Trainer;