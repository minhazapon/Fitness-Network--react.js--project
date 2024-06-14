


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Flexible = () => {


	const choose1  = () => toast("Get Started");
    const choose2  = () => toast("Get Started");
    const choose3  = () => toast("Get Started");







    return (
        <div className=" mb-10 mt-20 ml-10 mr-10">

            <div>


              <div className=" bg-yellow-50 p-3 text-center">
                <h1 className=" text-6xl font-serif"><span className=" text-yellow-400">Flexible</span> Plan For Every Budget</h1>
                <p className=" mt-5 text-slate-500 text-xl">"Your body can stand almost anything. It’s your mind that you have to convince."</p>
              </div>


{/* -------------------------------------------------------------- */}

              
              <div className=" mt-10">

              <section className="  ">
	<div className="container text-white px-4 mx-auto">
		
		<div className="flex flex-wrap items-stretch -mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-black text-white">
					<div className="space-y-2 ">
						<h4 className="text-5xl font-serif">Fitness Plan</h4>
                        <p className=" text-3xl text-yellow-400 font-serif">Normal</p>
                        <p className=" text-yellow-400">500$ Per Month</p>
						
					</div>
					<p className="mt-3 leading-relaxed text-white text-2xl">Join With us</p>
					<ul className="flex-1 mb-6 text-gray-400">
						<li className="flex mb-2 space-x-2">
							<img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span> Cardio Equipment</span>
						</li>
						<li className="flex mb-2 space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Strength Training Equipment</span>
						</li>
						<li className="flex mb-2 space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Functional Training Areas</span>
						</li>
					</ul>
					<button onClick={choose1} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded  btn ">Get Started</button>
					<ToastContainer />
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-black text-white">
                <div className="space-y-2">
						<h4 className="text-5xl font-serif">Fitness Plan</h4>
                        <p className=" text-3xl text-yellow-400 font-serif">Medium</p>
                        <p className=" text-yellow-400">700$ Per Month</p>
						
					</div>
					<p className="mt-3 leading-relaxed text-white text-2xl">Join With us</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Everything in Free</span>
						</li>
						<li className="flex items-center space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Cardio Equipment</span>
						</li>
						<li className="flex items-center space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Strength Training Equipment</span>
						</li>
						<li className="flex items-center space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Group Exercise Classes</span>
						</li>
					</ul>
					<button onClick={choose2} className=" btn">Get Started </button>
					<ToastContainer />
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-black text-white">
                <div className="space-y-2">
						<h4 className="text-5xl font-serif">Fitness Plan</h4>
                        <p className=" text-3xl  text-yellow-400 font-serif">premium</p>
                        <p className=" text-yellow-400">1000$ Per Month</p>
						
					</div>
					<p className="mt-3 leading-relaxed text-white text-2xl">Join With us</p>
					<ul className="space-y-2 text-gray-400">
						<li className="flex items-start space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Cardio Equipment</span>
						</li>
						<li className="flex items-start space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Strength Training Equipment</span>
						</li>
						<li className="flex items-start space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Functional Training Areas</span>
						</li>
						<li className="flex items-start space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Group Exercise Classes</span>
						</li>
						<li className="flex items-start space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Personal Training</span>
						</li>
						<li className="flex items-start space-x-2">
                        <img className=" h-[20px]" src="https://i.ibb.co/gT6Vg83/checkmark-1.png" alt="" />
							<span>Sports Facilities</span>
						</li>
					</ul>
                    <button onClick={choose3} className=" btn">Get Started </button>
					<ToastContainer />

									</div>
			</div>
		</div>
	</div>
</section>













              </div>









            </div>
            
        </div>
    );
};

export default Flexible;