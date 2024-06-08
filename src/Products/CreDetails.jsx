

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CreDetails = ({cre}) => {

  const crea = () => toast("Order Done");
    
    const {image, name, details, price} = cre

    return (
        <div>

            <div className="card w-96 h-[550px] text-white  bg-black shadow-xl border-[3px]  border-yellow-400 ">
               <figure className="px-10 pt-10">
               <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-[300px] " />
              </figure>
              <div className="card-body items-center text-center">
               <h2 className="card-title text-2xl font-serif "> Name: {name} </h2>
               <p className=" text-slate-400 font-serif "> {details} </p>
               <p className=" text-4xl font-serif "> Price: {price} </p>
               <div className="card-actions">
                 <button  onClick={crea} className="btn  text-black bg-yellow-500 ">Add Cart</button>
                 <ToastContainer />
               </div>
              </div>
            </div>


            
        </div>
    );
};

export default CreDetails;