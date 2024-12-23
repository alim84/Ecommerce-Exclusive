import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Today = () => {
  let today = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const [addcart, setaddcart] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <div className="flex items-center gap-2 mt-14">
            <div className="w-[15px] h-[30px] bg-[#BD4444] rounded-r-md "></div>
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              Today
            </h2>
          </div>
          <div className=" flex mt-10   items-center justify-between ">
            <div className="w-[200px]">
              <h2 className="text-2xl font-bold">Flash Sales</h2>
            </div>
            <div className=" grid grid-cols-5 items-center ">
              <div className=" ">
                <h3 className="text-lg font-bold">Days</h3>
                <div className="flex gap-3 ">
                  {" "}
                  <p className="text-xl font-bold ml-2 ">03 </p>
                  <p className="text-red-500 font-bold text-lg ml-3 ">: </p>
                </div>
              </div>
              <div className="">
                <h3 className="text-lg font-bold">Hours</h3>
                <div className="flex gap-3">
                  {" "}
                  <p className="text-xl font-bold ml-3 ">11 </p>
                  <p className="text-red-500 font-bold text-lg ml-3 ">: </p>
                </div>
              </div>
              <div className="items-center">
                <h3 className="text-lg font-bold">Minutes</h3>
                <div className="flex gap-3">
                  {" "}
                  <p className="text-xl font-bold ml-2 ">56 </p>
                  <p className="text-red-500 font-bold text-lg ml-8">: </p>
                </div>
              </div>
              <div className="">
                <h3 className="text-lg font-bold ml-5">Second</h3>
                <div className="flex gap-3">
                  {" "}
                  <p className="text-xl font-bold ml-8 ">32 </p>
                </div>
              </div>
            </div>
            <div className=" flex w-[200px] ml-56  ">
              <div>
                <button className="py-2 px-2 bg-red-200 rounded-lg mr-4">
                  <FaArrowRightLong />
                </button>
                <button className="py-2 px-2 bg-red-200 rounded-lg ">
                  <FaArrowLeftLong />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-10">
          <Slider {...today}>
            <div className="">
              <div className=" mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md   ">
                <img
                  className="ml-10 shadow-md shadow-gray-300"
                  src="/public/images/Frame613.png"
                ></img>
                <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
                  <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
                </div>
                <Link to="/wishlist">
                  <button>
                    {" "}
                    <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
                  </button>
                </Link>

                <Link to="/addcart">
                  <button>
                    {" "}
                    <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
                  </button>
                </Link>

                <div className="text-center  ">
                  <button className="opacity-[0] hover:opacity-100 cursor-pointer transition-all 0.4s py-[5px] px-24 bg-black rounded-md text-center  text-white mb-4 hover:font-semibold ">
                    Add Cart
                  </button>
                </div>

                <div className="ml-3">
                  <h4 className="font-semibold mb-1">HAVIT HV-G92 Gamepad</h4>
                  <div className="flex gap-6 mb-3 ">
                    <p className="text-[#BD4444]">$120</p>
                    <p className=" text-gray-800 line-through">$160 </p>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                    <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                    <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                    <FaStar className="text-yellow-600 pb-2 text-2xl  " />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex justify-center mt-8 ">
          <button className="py-3 px-12 bg-[#DB4444] text-white rounded-md mb-10 ">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default Today;
