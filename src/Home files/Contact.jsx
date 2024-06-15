import { useRef } from "react";



const Contact = () => {
    
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const mesgRef = useRef(null)

    const contact = e => {

       e.preventDefault();
	   console.log(nameRef.current.value)
	   console.log(emailRef.current.value)
	   console.log(mesgRef.current.value)


	}





    return (
        <div className=" mb-10 mt-20 ml-10 mr-10">

            <div>
                <h1 className=" text-center text-6xl font-serif mb-10">Contact US</h1>
            </div>

            <div className="  animate__animated animate__fadeInLeftBig animate__repeat-2     ">

            <section className="py-6  bg-black  text-white">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Fitness <span className=" text-yellow-400">Network</span></h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>America, New York City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801950374409</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>FitnessNetwork@gmail.com</span>
				</p>
			</div>
		</div>
		<form onSubmit={contact}  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input ref={nameRef} name="name" type="text" placeholder="Full Name" className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1"></span>
				<input ref={emailRef} name="email" type="email" placeholder="Email address" className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea ref={mesgRef} name="text" placeholder="Message" rows="3" className="block w-full p-5 text-black rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
             <input onClick={()=>document.getElementById('my_modal_1').showModal()} className="self-center btn text-lg rounded focus:ring hover:ring focus:ring-opacity-75 " type="submit" value="Submit" />

			 {/* Open the modal using document.getElementById('ID').showModal() method */}
           
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className=" flex justify-center items-center  gap-5">
					<img className=" h-[50px]" src="https://i.ibb.co/YZ2GcFq/mark-1.png" alt="" />
					<h1 className=" text-4xl font-serif text-black ">Submit Done</h1>
				</div>
                
              </div>
            </dialog>
		
		</form>
	</div>
</section>













            </div>
            
        </div>
    );
};

export default Contact;