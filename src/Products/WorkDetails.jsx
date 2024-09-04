import { Link } from "react-router-dom";


const WorkDetails = ({work}) => {


    const {image, name, details, price} = work


    return (
        <div>
            

            <div className="  transition duration-300 ease-in-out hover:scale-110  card w-96 h-[550px] text-white  bg-black shadow-xl border-[3px]  border-yellow-400 ">
               <figure className="px-10 pt-10">
               <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-[300px] " />
              </figure>
              <div className="card-body items-center text-center">
               <h2 className="card-title text-2xl font-serif "> Name: {name} </h2>
               <p className=" text-slate-400 font-serif "> {details} </p>
               <p className=" text-4xl font-serif "> Price: {price} </p>
               <div className="card-actions">
                    
                    <Link to="/orderForm" >
                    <div>
                    <a href="#_"   className="relative  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full  bg-yellow-400 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Add Cart</span>
                    <span className="relative invisible">Add Cart</span>
                    </a>
                    </div>   
                    </Link>
                     

              
               </div>
              </div>
            </div>


            
        </div>
    );
};

export default WorkDetails;