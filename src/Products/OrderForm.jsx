

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderForm = () => {


  const notifySuccess = () => toast.success(" Order Done ");

  const notifyError= () => toast.error("Order Failed");


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
        
          <div className="  mt-10 mb-10 ml-5 mr-5    ">

          <div className=" flex justify-center  ">
          
          <div className="  border-[1px] border-[#3DC2EC] w-[900px] p-10 rounded-xl">
          
          
          <div>
              <p className=" text-7xl font-mono font-bold text-center text-black ">Order<span className=" text-[#3DC2EC]">Now</span></p>
              <p className=" text-2xl font-mono text-black text-center mt-5">Any questions or remarks? Just write us a message!</p>
          </div>
          
          
          {/* ---------------------- */}
          
          <form onSubmit={onSubmit} >
          
          <div className=" flex justify-center mt-10">
          
          
          <div className=" text-[#3DC2EC] grid  md:grid-cols-2 gap-5">
          
          
           <div>
             <p className=" text-black text-xl font-mono">Name</p>
             <input placeholder="Enter Your Name" required name="Name" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
           </div>
          
           
           <div>
             <p className=" text-black text-xl font-mono">Email</p>
             <input placeholder="Enter Your Email" required name="Email" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="email" id="" />
           </div>
           <div>
             <p className=" text-black text-xl font-mono">Message</p>
             <textarea placeholder="Enter Your Message" required name="Message" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" id=""></textarea>
           </div>
           <div>
             <p className=" text-black text-xl font-mono">ProductsName</p>
             <input placeholder="Enter Your ProductsName" required name="ProductsName" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
           </div>
           <div>
             <p className=" text-black text-xl font-mono">PayNumber</p>
             <input placeholder="Enter Your PayNumber" required name="PayNumber" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
           </div>
           <div>
             <p className=" text-black text-xl font-mono">Phone</p>
             <input placeholder="Enter Your Phone" required name="Phone" className=" p-2 mt-1 border-[1px] bg-slate-100 border-[#3DC2EC] h-[50px] w-[400px] rounded-xl" type="text" />
           </div>
          
          
          </div>
                      
          </div>
          
          <div className=" flex justify-center">
              <button className=" w-full mt-5  bg-[#3DC2EC] text-white btn  font-mono ">Order</button>
              <ToastContainer />
          </div>
          
          </form>
          
          
          
          </div>
          
          </div>

          
           {/* ------------------------------------------------------------------------address----------------------- */}

           <div className="     mt-20">

            <div className="  bg-slate-200  p-5 rounded-xl  flex justify-center">
              <div className="  -mt-16   grid  md:grid-cols-3 gap-10">


                 <div>
                 <div className=" flex justify-center">
                 <div className="  h-[150px] w-[150px] p-5  rounded-full bg-[#3DC2EC]">
                   <img className=" mt-2 h-[100px]" src="https://assets.nicepagecdn.com/d2cc3eaa/206779/images/f0e08551.png" alt="" />
                 </div>
                 </div>
                 <p className=" font-mono text-center font-semibold mt-5 text-3xl">About Gym
                 </p>
                 <p className=" font-mono text-center font-semibold mt-5 text-xl">Running Guide
                 Workouts
                 </p>
                 </div>


                 <div>
                 <div className=" flex justify-center">
                 <div className="  flex justify-center  h-[150px] w-[150px] p-5  rounded-full bg-[#3DC2EC]">
                   <img className=" mt-2 h-[100px]" src="https://assets.nicepagecdn.com/d2cc3eaa/206779/images/39fea02a.png" alt="" />
                 </div>
                 </div>
                 <p className=" font-mono text-center font-semibold mt-5 text-3xl">Phone (Landline)
                 </p>
                 <p className=" font-mono text-center font-semibold mt-5 text-xl">+ 912 3 567 8987<br></br>
                 + 912 5 252 3336
                 </p>
                 </div>


                 <div>
                 <div className=" flex justify-center">
                 <div className=" flex justify-center  h-[150px] w-[150px] p-5  rounded-full bg-[#3DC2EC]">
                   <img className=" mt-2 h-[100px]" src="https://assets.nicepagecdn.com/d2cc3eaa/206779/images/30b3e966.png" alt="" />
                 </div>
                 </div>
                 <p className=" font-mono text-center font-semibold mt-5 text-3xl">Our Office Location
                 </p>
                 <p className=" font-mono text-center font-semibold mt-5 ">The Interior Design Studio Company<br></br>
                 The Courtyard, ​Al Quoz 1,​ Colorado, ​ USA
                 </p>
                 </div>

              </div>


            </div>

           </div>
          
          </div>


        
    );
};

export default OrderForm;