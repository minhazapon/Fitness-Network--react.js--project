import { useRef } from "react";


const BookDay = () => {
       
    const name1Ref = useRef(null) 
    const name2Ref = useRef(null) 
    const emailRef = useRef(null) 
    const NumRef = useRef(null) 
    const dayRef = useRef(null) 
 
    const day = e => {
      
        e.preventDefault();
        console.log(name1Ref.current.value)
        console.log(name2Ref.current.value)
        console.log(emailRef.current.value)
        console.log(NumRef.current.value)
        console.log(dayRef.current.value)



    }




    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">


            <div className=" flex justify-center">


               <div className=" flex-col md:flex-row lg:flex-row bg-black p-5 ">
              
                    <h1 className=" text-5xl text-white font-serif">Book Your Day</h1>
                    
                    <form onSubmit={day} >

                    <div className=" grid  md:grid-cols-2 gap-2 mt-2 ">
                       <input ref={name1Ref} placeholder="First Name" className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" />
                       <input ref={name2Ref} placeholder="Last Name" className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" />
                       <input ref={NumRef} className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" placeholder="Number" type="number" name="number" id="" />
                       <input ref={emailRef} className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" placeholder="email" type="email" name="email" id="" />
                       <input ref={dayRef} placeholder="Visit Day" className=" p-2 h-[50px] w-[250px] border-[1px] border-black rounded-lg" type="text" />
                       <input onClick={()=>document.getElementById('my_modal_1').showModal()} className=" btn   bg-black text-white p-2 h-[50px] w-[250px] border-[1px] border-white rounded-lg" type="submit" value="Book" />
                       <dialog id="my_modal_1" className="modal">
                          <div className="modal-box">
                            <div className=" flex justify-center items-center  gap-5">
			            		<img className=" h-[50px]" src="https://i.ibb.co/YZ2GcFq/mark-1.png" alt="" />
			            		<h1 className=" text-4xl font-serif text-black ">Book Done</h1>
			            	</div>
                          </div>
                        </dialog>
                    </div>


                    </form>
                    




               </div>













            </div>
            
        </div>
    );
};

export default BookDay;