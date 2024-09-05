import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom'

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Path = () => {
  return (
    <div className=" mt-20 mb-10 ml-10 mr-10">
      <div>
        <div className=" bg-black p-10">
          <Marquee>
            <h1 className="  text-yellow-400 text-6xl font-serif text-center">
              Choose Your Path To Fitness
            </h1>
          </Marquee>
        </div>
      </div>

      <div className=" mt-10 ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className=" flex justify-center">
              <div className="max-w-xs   rounded-md shadow-md bg-black text-gray-100">
                <img
                  src="https://img.freepik.com/free-photo/data-stats-around-person-doing-physical-activity_23-2150165162.jpg?t=st=1717582606~exp=1717586206~hmac=ca3d3071e143c463ff95cfffc0deb5dc9fbb1ec1187c325d72c3be8ed7ac917d&w=740"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      {" "}
                      Interval Training
                    </h2>
                    <p className="text-gray-100">
                      Join Fitness Network and Traning with Us
                    </p>
                  </div>
                  <Link className="  flex justify-center" to="/pathForm" >
                  <button className=" w-[300px] btn text-center">Choose</button>
                  </Link>  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center">
              <div className="max-w-xs   rounded-md shadow-md bg-black text-gray-100">
                <img
                  src="https://img.freepik.com/premium-photo/athlete-muscular-bodybuilder-man-posing-with-dumbbells-gym_136403-4814.jpg?w=740"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      CrossFit
                    </h2>
                    <p className="text-gray-100">
                      Join Fitness Network and Traning with Us
                    </p>
                  </div>
                  <Link className="  flex justify-center" to="/pathForm" >
                  <button className=" w-[300px] btn text-center">Choose</button>
                  </Link>  
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center">
              <div className="max-w-xs   rounded-md shadow-md bg-black text-gray-100">
                <img
                  src="https://img.freepik.com/premium-photo/sportsman-exercising-with-barbell-young-caucasian-muscular-male-bodybuilder-doing-weight-lifting-workout-dark-gym-using-sportive-equipment_183219-6101.jpg?w=740"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Strength Training
                    </h2>
                    <p className="text-gray-100">
                      Join Fitness Network and Traning with Us
                    </p>
                  </div>
                  <Link className="  flex justify-center" to="/pathForm" >
                  <button className=" w-[300px] btn text-center">Choose</button>
                  </Link>  
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center">
              <div className="max-w-xs   rounded-md shadow-md bg-black text-gray-100">
                <img
                  src="https://img.freepik.com/free-photo/young-sportsman-having-strength-training-lifting-barbell-gym_637285-2496.jpg?t=st=1717583127~exp=1717586727~hmac=d69a5ce91ec98f05498b92f2fc23cc9056880ec42f66fc1b6511c47cb5c20687&w=740"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Powerlifting
                    </h2>
                    <p className="text-gray-100">
                      Join Fitness Network and Traning with Us
                    </p>
                  </div>
                  <Link className="  flex justify-center" to="/pathForm" >
                  <button className=" w-[300px] btn text-center">Choose</button>
                  </Link>  
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center">
              <div className="max-w-xs   rounded-md shadow-md bg-black text-gray-100">
                <img
                  src="https://img.freepik.com/free-photo/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_613910-1176.jpg?t=st=1717583194~exp=1717586794~hmac=41435db522073023c558f718ce179ca2519f4ca8a8bd0450122df79ad710f885&w=740"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Bodybuilding
                    </h2>
                    <p className="text-gray-100">
                      Join Fitness Network and Traning with Us
                    </p>
                  </div>
                  <Link className="  flex justify-center" to="/pathForm" >
                  <button className=" w-[300px] btn text-center">Choose</button>
                  </Link>  
             
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" flex justify-center">
              <div className="max-w-xs   rounded-md shadow-md bg-black text-gray-100">
                <img
                  src="https://img.freepik.com/free-photo/male-boxer-boxing-punching-bag_155003-3064.jpg?t=st=1717583302~exp=1717586902~hmac=c09f784573aa7ae7dd1ba5d6e03771e737d299fb8ff8eb3bc7106047722c6fe4&w=740"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      Kickboxing
                    </h2>
                    <p className="text-gray-100">
                      Join Fitness Network and Traning with Us
                    </p>
                  </div>
                  <Link className="  flex justify-center" to="/pathForm" >
                  <button className=" w-[300px] btn text-center">Choose</button>
                  </Link>  
                
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Path;
