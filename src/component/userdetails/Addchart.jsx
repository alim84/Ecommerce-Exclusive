import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

const Addchart = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container mx-auto mt-24 mb-20">
        <div className="grid grid-cols-4 gap-4">
          <div className="">
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
          <div className=" row-span-2">
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
      </div>
    </>
  );
};

export default Addchart;
