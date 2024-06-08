import { useEffect, useState } from "react";
import CreDetails from "./CreDetails";



const Creatine = () => {

    const [cre, setCre] = useState([])

    useEffect( () => {
      fetch('creatine.json')
      .then(res => res.json())
      .then(data => setCre(data))
    } , [])



    return (
        <div>

            <div>
             <h1 className=" text-center  mt-5 mb-5 text-5xl font-serif ">Creatine Supplements</h1>  
             <div className=" flex justify-center">
             <p className=" h-[1px] w-[500px] bg-black"></p>
             </div>
            </div> 


            <div className=" flex justify-center mt-10">
                <div className=" grid  md:grid-cols-3 gap-5">
                    {
                        cre.map( cre => <CreDetails cre={cre} ></CreDetails> )
                    }
                </div>
            </div>

            
        </div>
    );
};

export default Creatine;