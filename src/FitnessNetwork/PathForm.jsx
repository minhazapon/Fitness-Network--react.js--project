

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PathForm = () => {


  const notifySuccess = () => toast.success(" Choose Successfully ");

  const notifyError= () => toast.error("Choose Failed");


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
    
    <div className=" ">

           <div className=" flex justify-center  bg-no-repeat bg-cover p-5"
           
           style={{
            backgroundImage: "url(https://img.freepik.com/premium-photo/silhouette-man-boxing_23-2148024354.jpg?w=740)",
          }}
           >
           <div  className="">
            <div className=" flex justify-center items-center gap-2 -mb-10 ">
            <img className=" h-[50px]" src="https://cdn-icons-png.flaticon.com/128/3597/3597952.png" alt="" />
            <p className=" font-mono font-semibold text-4xl mt-5  text-white  text-center">Choose Your Training Path</p>
            </div>
            <div class="flex items-center justify-center p-12">
               
               <div class="mx-auto w-full max-w-[550px] ">
                   <form  onSubmit={onSubmit} >
                       <div class="mb-5">
                           <label for="name" class="mb-3 block text-base font-medium text-white">
                               Full Name
                           </label>
                           <input type="text" name="name" id="name" placeholder="Full Name"
                               class="w-full rounded-md border border-[#e0e0e0]  bg-blend-multiply py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                       </div>
                       <div class="mb-5">
                           <label for="phone" class="mb-3 block text-base font-medium text-white">
                               Phone Number
                           </label>
                           <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                               class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                       </div>
                       <div class="mb-5">
                           <label for="email" class="mb-3 block text-base font-medium text-white">
                               Email Address
                           </label>
                           <input type="email" name="email" id="email" placeholder="Enter your email"
                               class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                       </div>
                       <div class="mb-5">
                           <label for="training" class="mb-3 block text-base font-medium text-white">
                              Training Name 
                           </label>
                           <input name="Training"  placeholder="Enter your Training Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="text" />
                       </div>
                       <div class="-mx-3 flex flex-wrap">
                           <div class="w-full px-3 sm:w-1/2">
                               <div class="mb-5">
                                   <label for="date" class="mb-3 block text-base font-medium text-white">
                                       Date
                                   </label>
                                   <input type="date" name="date" id="date"
                                       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                               </div>
                           </div>
                           <div class="w-full px-3 sm:w-1/2">
                               <div class="mb-5">
                                   <label for="time" class="mb-3 block text-base font-medium text-white">
                                       Time
                                   </label>
                                   <input type="time" name="time" id="time"
                                       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                               </div>
                           </div>
                       </div>
           
                       <div class="mb-5 pt-3">
                           <label class="mb-5 block text-base font-semibold text-white sm:text-xl">
                               Address Details
                           </label>
                           <div class="-mx-3 flex flex-wrap">
                               <div class="w-full px-3 sm:w-1/2">
                                   <div class="mb-5">
                                       <input type="text" name="area" id="area" placeholder="Enter area"
                                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                   </div>
                               </div>
                               <div class="w-full px-3 sm:w-1/2">
                                   <div class="mb-5">
                                       <input type="text" name="city" id="city" placeholder="Enter city"
                                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                   </div>
                               </div>
                               <div class="w-full px-3 sm:w-1/2">
                                   <div class="mb-5">
                                       <input type="text" name="state" id="state" placeholder="Enter state"
                                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                   </div>
                               </div>
                               <div class="w-full px-3 sm:w-1/2">
                                   <div class="mb-5">
                                       <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                           class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                   </div>
                               </div>
                           </div>
                       </div>
           
                       <div>
                           <button
                               class=" w-full btn rounded-md bg-black  text-center  font-semibold text-white outline-none">
                               Choose
                           </button>
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

export default PathForm;
