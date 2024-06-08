import { useEffect, useState } from "react";
import ProDEtails from "./ProDEtails";



const Protein = () => {

    
     const [pro, setPro] = useState([])


     useEffect( ( ) => {

         fetch('Protein.json')
         .then(res => res.json())
         .then(data => setPro(data))
      





     } , [])



    return (
        <div className="">

            <div>

            <div>
             <h1 className=" text-center  mt-5 mb-5 text-5xl font-serif ">Protein Supplements</h1>  
             <div className=" flex justify-center">
             <p className=" h-[1px] w-[500px] bg-black"></p>
             </div>
            </div> 
             
{/* ------------------------------------------------------------------------ */}


            

            <div className=" flex justify-center mt-10">
            <div className=" grid  md:grid-cols-3 gap-5">
                {
                   pro.map( pro => <ProDEtails pro={pro} ></ProDEtails> )
                }
            </div>

            </div>










            </div>
            
        </div>
    );
};

export default Protein;