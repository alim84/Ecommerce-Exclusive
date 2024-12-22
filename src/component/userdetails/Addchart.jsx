import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Addchart = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container mx-auto mt-24 mb-20">
        <div className="grid grid-cols-4 justify-between gap-4">
          <div className=" ">
            <img
              className="mb-4 w-[150px] h-[120px]"
              src="/public/images/Frame895.png"
            ></img>
            <img
              className="mb-4 w-[150px] h-[120px]"
              src="/public/images/Frame895.png"
            ></img>
            <img
              className="mb-4 w-[150px] h-[120px]"
              src="/public/images/Frame895.png"
            ></img>
          </div>
          <div className="  rounded-md">
            {" "}
            <img src="/public/images/Frame894.png"></img>
          </div>
          <div className="col-span-2">
            <div className="  ml-8">
              <h3 className="text-2xl mb-2 font-bold">Havic HV G-92 Gamepad</h3>
              <div className="flex mb-2">
                <div className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>(150 Reviews)</p>
                <p className="text-cyan-300 font-bold">
                  <a href="">In Stock</a>
                </p>
              </div>
              <h2 className="font-bold mb-3">$192.00</h2>
              <p className="text-[12px] mb-2">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <div className="flex gap-3 items-center">
                <h4 className="font-bold">Colours</h4>
                <input className="bg-blue-400" type="radio"></input>
                <input className="bg-[#DB4444]" type="radio"></input>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <h4 className="font-bold">Size</h4>
                <button className="outline-none border-2 px-3 rounded-md hover:bg-[#DB4444] ">
                  S
                </button>
                <button className="outline-none border-2 px-3 rounded-md hover:bg-[#DB4444] ">
                  M
                </button>
                <button className="outline-none border-2 px-3 rounded-md hover:bg-[#DB4444] ">
                  L
                </button>
                <button className="outline-none border-2 px-3 rounded-md hover:bg-[#DB4444] ">
                  Xl
                </button>
              </div>
              <div className="flex gap-3 items-center mt-4 mb-4">
                <button
                  className="  rounded-lg  text-2xl border-2 px-4 hover:bg-[#DB4444] hover:text-white  "
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </button>
                {/* <button onClick={handleReset}>Reset</button> */}
                <button className="px-2 py-2  rounded-md  hover:bg-red-400">
                  {" "}
                  <p className=" font-bold"> {counter}</p>
                </button>
                <button
                  className="  rounded-lg  text-2xl  border-2 px-4 hover:bg-[#DB4444] hover:text-white "
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </button>
                <button className="px-5 py-2 text-white bg-[#DB4444] rounded-md font-bold">
                  Buy Now
                </button>
                <button className="border-2 border-gray-800 py-2 px-3 rounded-md">
                  <GiSelfLove />
                </button>
              </div>
              <div className="flex gap-2 items-center border-2 border-blue-200 py-2 px-2 ">
                <div>
                  <TbTruckDelivery className="text-2xl" />
                </div>
                <div className="ml-4">
                  <h4>Free Delivery</h4>
                  <p className="">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center border-2 border-blue-200 py-2 px-2 mt-1">
                <div>
                  <GiReturnArrow className="text-2xl" />
                </div>
                <div className="ml-4">
                  <h4>Return Delivery</h4>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8">
          <div className="flex items-center gap-2 ">
            <div className="w-[15px] h-[30px] bg-[#BD4444] rounded-r-md "></div>
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              This Month
            </h2>
          </div>
        </div>
        <div className=" gap-10 grid grid-cols-5">
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

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
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

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
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

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
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

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
          <div className="mt-10 relative w-[270px] h-[250px rounded-sm] bg-gray-100 rounded-md mb-24  ">
            <img
              className="ml-10 shadow-md shadow-gray-300"
              src="/public/images/Frame613.png"
            ></img>
            <div className="w-[30px] h-[20px] bg-red-500 rounded-sm absolute translate-y-[-170px]">
              <h5 className="text-white text-[9px] mt-[3px] ">-40%</h5>
            </div>

            <button>
              {" "}
              <FaRegHeart className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-180px]" />
            </button>
            <button>
              {" "}
              <FaEye className="bg-white text-gray-700 w-[20px] h-[15px] absolute translate-x-[235px] translate-y-[-140px]" />
            </button>

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
      </div>
    </>
  );
};

export default Addchart;
