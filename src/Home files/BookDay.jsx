
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDay = () => {

    const notifySuccess = () => toast.success("Successfully Booked");

    const notifyError= () => toast.error("Book Failed");




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
        <div className=" mb-10 mt-10 ml-10 mr-10">


            <div className=" flex justify-center">


               <div className=" flex-col md:flex-row lg:flex-row bg-black p-5 ">
              
                    <h1 className=" text-5xl text-white font-serif">Book Your Day</h1>
                    
                    <form  onSubmit={onSubmit} >

                    <div className=" grid  md:grid-cols-2 gap-2 mt-2 ">
                       <input placeholder="First Name" required className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" name="firstName" />
                       <input placeholder="Last Name" required className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" name="lastName" />
                       <input className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" placeholder="Number" required  type="number" name="number" id="" />
                       <input className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" placeholder="email"  required type="email" name="email" id="" />
                       <input placeholder="Visit Day" required className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" name="visitDay" />
                       <button className=" btn   bg-black text-white p-2 h-[50px] w-[250px] border-[1px] border-white rounded-lg">Book</button>
                       <ToastContainer />
                      
                    </div>


                    </form>
                    




               </div>













            </div>
            
        </div>
    );
};

export default BookDay;