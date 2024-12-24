const AddEnhance = () => {
  return (
    <>
      <div className="container mx-auto bg-black rounded-md items-center pt-[69px] pl-[56px] mb-10">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-[#00FF66] font-[16px]">Categories</h2>
            <h3 className="text-white text-[48px] font-[600] mt-[20px]">
              Enhance Your <br></br> Music Experience
            </h3>
            <div className=" grid grid-cols-5 items-center   ">
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center ">
                <div>
                  <p className="text-xl font-bold ml-2 text-[#DB4444]">03 </p>
                  <div>
                    <h3 className="text-lg font-bold text-gray-500">Days</h3>
                  </div>
                </div>
              </div>
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                <div>
                  <p className="text-xl font-bold ml-3 text-[#DB4444] ">11 </p>
                  <div>
                    <h3 className="text-lg font-bold text-gray-500">Hours</h3>
                  </div>
                </div>
              </div>
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                <div>
                  <p className="text-xl font-bold ml-5 text-[#DB4444] ">56 </p>
                  <div>
                    <h3 className="text-lg font-bold text-gray-500">Minutes</h3>
                  </div>
                </div>
              </div>
              <div className=" w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                <div>
                  <p className="text-xl font-bold ml-5 text-[#DB4444] ">32 </p>

                  <div>
                    <h3 className="text-lg font-bold text-gray-500 ">Second</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src="/public/images/Frame694.png"></img>
          </div>
        </div>
        <button className="px-6 py-3 bg-[#00FF66] rounded-md mb-5">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default AddEnhance;
