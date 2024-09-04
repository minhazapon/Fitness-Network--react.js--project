

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Payment = () => {


    const notifySuccess = () => toast.success(" Payment Successfully ");

    const notifyError= () => toast.error("Payment Failed");


	const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6626a723-9dad-41ba-8220-fd9dedfeea00");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          notifySuccess()
          event.target.reset();
        } else {
            notifyError()
          setResult(data.message);
        }
      };
   




    return (
        <div className="  bg-blue-100 p-20 rounded-xl">

            <div>

            <div className=" flex items-center gap-5">
                <img className=" h-[100px]" src="https://i.ibb.co/9VThjL8/atm-card.png " alt="" />
                <h1 className=" text-6xl font-serif">Pay Us </h1>
            </div>
            
            <hr className=" mt-3"></hr>


{/* -------------------------------------------------------------------------- */}

            <div className="  flex justify-center mt-5">


            <div className=" flex-col md:flex-row lg:flex-col">


             <div className=" bg-blue-100  flex items-center gap-5">
              <a href="https://bd.visa.com/pay-with-visa/contactless-payments/contactless-payments.html" >
              <img className=" h-[80px] " src="https://thumbs.dreamstime.com/b/visa-logo-printed-paper-chisinau-moldova-september-visa-logo-printed-paper-placed-white-background-visa-128373485.jpg" alt="" />
              </a> 
              <a href="https://www.mastercard.us/en-us.html" >
              <img className=" h-[80px] " src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png" alt="" />
              </a> 
              <a href="https://www.paypal.com/bd/home" >
              <img className=" h-[80px] " src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_lim.size_1050x591.v1602794215.png" alt="" />
              </a> 
             </div>


             <div>

                <form onSubmit={onSubmit} >

               <div>
                <span className=" text-xl text-slate-500">card Number</span>
                <br></br>
                <input className=" mt-1 p-2 border-[1px] border-blue-500 w-[350px]" placeholder="0000-0000-0000-0000" required type="number" name="number" id="" />
               </div>

               <div className=" mt-5 flex items-center gap-3 ">
                <div>
                <span className=" text-xl text-slate-500">Date</span>
                <br></br>
                <input className=" p-2 border-[1px] border-blue-500 w-[170px] " required type="date" name="date" id="" />
                </div>

                <div>
                <span className=" text-xl text-slate-500">Payment$</span>
                <br></br>
                <input placeholder="$$$$$$$" required className=" p-2 border-[1px] border-blue-500 w-[170px] " type="number" name="number" id="" />
                </div>
                
               </div>

                 

                 <div className=" mt-5">
                 <button className=" btn w-[350px] bg-[#3ABEF9] text-white  " >Payment</button>
                 <ToastContainer />
                 </div>
               


               </form>














             </div>
















            </div>

















            </div>

            </div>
            
        </div>
    );
};

export default Payment;