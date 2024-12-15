import React from "react";

const Today = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-2 mt-14">
            <div className="w-[15px] h-[30px] bg-[#BD4444] rounded-r-md "></div>
            <h2 className="text-[#BD4444] text-xl font-mono font-bold">
              Today
            </h2>
          </div>
          <div className="mt-10 flex gap-10 ">
            <div>
              <h2>Flash Sales</h2>
            </div>
            <div className="flex gap-5 text-center ">
              <div>
                <h3>Days</h3>
                <p>03</p>
              </div>
              <div>
                <h3>Hours</h3>
                <p>23</p>
              </div>
              <div>
                <h3>Minutes</h3>
                <p>19</p>
              </div>
              <div className="gap-36">
                <h3>Seconds</h3>
                <p>56</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex  ">
            <div>
              <h2>Flash Sales</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
