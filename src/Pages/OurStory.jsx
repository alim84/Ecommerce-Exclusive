import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { CiMobile4 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const OurStory = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="gap-10 grid grid-cols-2">
          <div>
            <h2>Our Story</h2>
            <p>
              adfasdf dfadsfasd asdfadsf dfsdfasd asdfsdaadafdsaf asdfdasfas
              sadfasdf dsafsdafasd{" "}
            </p>
          </div>
          <div>
            <img src=""></img>
          </div>
        </div>

        <div className=" gap-10 grid grid-cols-6">
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <CiMobile4 className="text-5xl " />
              <h3>Phone</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <RiComputerLine className="text-5xl" />
              <h3>Computer</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <BsSmartwatch className="text-5xl" />
              <h3>SmartWatch</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <IoCameraOutline className="text-5xl" />
              <h3>Camera</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <FaHeadphonesSimple className="text-5xl" />
              <h3>HeadPhones</h3>
            </div>
          </div>
          <div className="mt-10 relative w-[170px] h-[145px] rounded-sm  mb-24 border-4 hover:border-none hover:bg-[#DB4444] hover:text-white  ">
            <div className="absolute translate-x-[60px] translate-y-[30px] ">
              <FaGamepad className="text-5xl" />
              <h3>Gaming</h3>
            </div>
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

        <div className="grid grid-cols-3 justify-between mt-20 mb-20 ">
          <div className="relative text-center ">
            <div className="w-[80px] h-[80px] bg-gray-400 rounded-full ml-[220px] ">
              <div className="w-[60px] h-[60px] bg-black rounded-full absolute translate-x-[10px] translate-y-[10px]">
                <TbTruckDelivery className="text-white text-2xl absolute translate-x-[17px] translate-y-[15px] " />
              </div>
            </div>
            <h3 className="text-[16px] mt-[16px] font-semibold">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-[10px]">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="relative text-center ">
            <div className="w-[80px] h-[80px] bg-gray-400 rounded-full ml-[220px] ">
              <div className="w-[60px] h-[60px] bg-black rounded-full absolute translate-x-[10px] translate-y-[10px]">
                <MdOutlineHeadsetMic className="text-white text-2xl absolute translate-x-[17px] translate-y-[15px] " />
              </div>
            </div>
            <h3 className="text-[16px] mt-[16px] font-semibold">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-[10px]">Friendly 24/7 customer suppor</p>
          </div>
          <div className="relative text-center ">
            <div className="w-[80px] h-[80px] bg-gray-400 rounded-full ml-[220px] ">
              <div className="w-[60px] h-[60px] bg-black rounded-full absolute translate-x-[10px] translate-y-[10px]">
                <SiAdguard className="text-white text-2xl absolute translate-x-[17px] translate-y-[15px] " />
              </div>
            </div>
            <h3 className="text-[16px] mt-[16px] font-semibold">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-[10px]">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
