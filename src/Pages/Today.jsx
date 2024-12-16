import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const Today = () => {
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
            <div className="flex grid grid-cols-5 items-center ">
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
      </div>
    </>
  );
};

export default Today;
