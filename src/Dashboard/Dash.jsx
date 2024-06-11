

import { Link,  Outlet } from "react-router-dom";


const Dash = () => {
    return (
        <div className="  flex-col md:flex-row lg:flex-row mb-10 mt-10 ml-10 mr-10">


            <div className=" flex-col md:flex-row lg:flex-row flex  justify-start  gap-10">


                {/* --------------------dashBoard */}


                <div className=" flex-col md:flex-row lg:flex-row">

                <div className="flex flex-col h-[600px] p-3 w-60 bg-black text-gray-100">
	<div className="space-y-3">
		<div className="flex items-center justify-between">
			<h2>Dashboard</h2>
			<button className="p-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-100">
					<rect width="352" height="32" x="80" y="96"></rect>
					<rect width="352" height="32" x="80" y="240"></rect>
					<rect width="352" height="32" x="80" y="384"></rect>
				</svg>
			</button>
		</div>
		<div className="relative">
			<span className="absolute inset-y-0 left-0 flex items-center py-4">
				<button type="submit" className="p-2 focus:outline-none focus:ring">
					<svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 text-gray-400">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
				</button>
			</span>
			<input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900" />
		</div>
		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						 

                         <div className="  flex items-center gap-2  ">
                         <img className=" h-[30px]  " src="https://i.ibb.co/Y0w4TvD/sport-1.png" alt="" />
                         <div>
                         <Link to="info" >
                          Fitness Information
                         </Link>
                         </div>
                         </div>
                         
                        
                        
                        
						
					</a>
				</li>
				<li className="rounded-sm">
			         	<div className=" ml-2  flex items-center gap-2  ">
                         <img className=" h-[30px]  " src="https://i.ibb.co/Y3dLqD9/bar-chart.png" alt="" />
                         <div>
                         <Link to="charts" >
                          Clients Charts
                         </Link>
                         </div>
                         </div>
				</li>
				<li className="rounded-sm">

			
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<div className="  flex items-center gap-2  ">
                         <img className=" h-[30px]  " src="https://i.ibb.co/RT04jnh/trainer.png" alt="" />
                         <div>
                         <Link to="coach" >
                          Gym Coach
                         </Link>
                         </div>
                         </div>
					</a>
				</li>
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
				     	<div className="  flex items-center gap-2  ">
                         <img className=" h-[30px]  " src="  https://i.ibb.co/3NF22J3/badge.png   " alt="" />
                         <div>
                         <Link to="goal" >
						 Goals and Achievements
                         </Link>
                         </div>
                         </div>
					</a>
				</li>
				
				<li className="rounded-sm  text-gray-50">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					    <div className="  flex items-center gap-2  ">
                         <img className=" h-[30px]  " src="  https://i.ibb.co/9VThjL8/atm-card.png  " alt="" />
                         <div>
                         <Link to="pay" >
						  Payment
                         </Link>
                         </div>
                         </div>
					</a>
				</li>
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<div className="  flex items-center gap-2  ">
                         <img className=" h-[30px]  " src=" https://i.ibb.co/GvWFtz9/locaiton.png  " alt="" />
                         <div>
                         <Link to="location" >
						  location
                         </Link>
                         </div>
                         </div>
					</a>
				</li>
				
			</ul>
		</div>
	</div>
	<div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
		<img src="https://i.ibb.co/mBQWDSX/running.png" alt="" className="w-12 h-12 rounded-lg bg-white p-2" />
		<div>
			<h2 className="text-lg font-semibold">Fitness Network</h2>
			
		</div>
	</div>
</div>





                </div>


            {/* ----------------------------outlet */}

                <div className=" flex-col md:flex-row lg:flex-row">


                   <Outlet></Outlet>




                </div>











            </div>
            
        </div>
    );
};

export default Dash;