import { useEffect, useState } from "react";
import WorkDetails from "./WorkDetails";




const Work = () => {


    const [work, setWork] = useState([])

    useEffect( () => {
    fetch('work.json')
    .then(res => res.json())
    .then(data => setWork(data))

    } , [])



    return (
        <div>

            <div>
                
            <div>
             <h1 className=" text-center  mt-5 mb-5 text-5xl font-serif ">WorkOut Supplements</h1>  
             <div className=" flex justify-center">
             <p className=" h-[1px] w-[500px] bg-black"></p>
             </div>
            </div> 

{/* --------------------------------------------------- */}


            
            <div className=" flex justify-center mt-10">

            <div className=" grid   md:grid-cols-3 gap-5">
              {
                work.map( work => <WorkDetails work={work}></WorkDetails> )
              }
            </div>


            </div>










            </div>



            
        </div>
    );
};

export default Work;