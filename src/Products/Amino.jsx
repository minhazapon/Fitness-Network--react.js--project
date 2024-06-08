import { useEffect, useState } from "react";
import AminoDetails from "./AminoDetails";



const Amino = () => {

    const [amino, setAmino] = useState([])

    useEffect( () => {
     fetch('amino.json')
     .then(res => res.json())
     .then(data => setAmino(data))
    } , [])





    return (
        <div>

            <div>
                
            <div>
             <h1 className=" text-center  mt-5 mb-5 text-5xl font-serif ">Amino Supplements</h1>  
             <div className=" flex justify-center">
             <p className=" h-[1px] w-[500px] bg-black"></p>
             </div>
            </div> 



             
             <div className=" flex justify-center mt-10">
             <div className=" grid  md:grid-cols-3 gap-5">
                {
                 amino.map( amino => <AminoDetails amino={amino} ></AminoDetails> )
                }
             </div>
             </div>


             







            </div>




            
        </div>
    );
};

export default Amino;