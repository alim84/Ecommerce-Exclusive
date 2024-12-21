import { Link } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-4 justify-between mt-10 ">
        <div>
          <div className="w-[300px]">
            <div>
              <div className="flex items-center gap-2  py-3 bg-gray-400 pl-2 shadow-md shadow-gray-200 mt-5">
                {" "}
                <MdDashboardCustomize className="text-white text-2xl" />
                <h2 className="text-xl font-semibold text-white">
                  Manage My Account
                </h2>
              </div>
              <div className="flex  items-center mt-5  ">
                <div className="w-[20px] h-[20px] bg-gray-400 rounded-r-full ml-8 hover:rotate-180 hover:bg-red-300  "></div>

                <div>
                  <Link
                    to="/profile/personalinfo"
                    className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
                  >
                    {" "}
                    Personal Info
                  </Link>
                </div>
              </div>
              <div className="flex  items-center mt-5 ">
                <div className="w-[20px] h-[20px] bg-gray-400 rounded-r-full ml-8 hover:rotate-180 hover:bg-red-300  "></div>
                <div>
                  <Link
                    to=""
                    className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
                  >
                    {" "}
                    My Dashboard
                  </Link>
                </div>
              </div>
              <div className="flex  items-center mt-5 ">
                <div className="w-[20px] h-[20px] bg-gray-400 rounded-r-full ml-8 hover:rotate-180 hover:bg-red-300  "></div>
                <div>
                  <Link
                    to
                    className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
                  >
                    {" "}
                    My Payment Options
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <div>
              <div className="flex items-center gap-2  py-3 bg-gray-400 pl-2 shadow-md shadow-gray-200 mt-5">
                {" "}
                <IoCart className="text-white text-2xl" />
                <h2 className="text-xl font-semibold text-white">My Order</h2>
              </div>
              <div className="flex  items-center mt-5 ">
                <div className="w-[20px] h-[20px] bg-gray-400 rounded-r-full ml-8 hover:rotate-180 hover:bg-red-300  "></div>
                <div>
                  <Link
                    to="/profile/myorders"
                    className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
                  >
                    {" "}
                    My Order
                  </Link>
                </div>
              </div>
              <div className="flex  items-center mt-5 ">
                <div className="w-[20px] h-[20px] bg-gray-400 rounded-r-full ml-8 hover:rotate-180 hover:bg-red-300  "></div>
                <div>
                  <Link
                    to=""
                    className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
                  >
                    {" "}
                    My Cancel Order
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2  py-3 bg-gray-400 pl-2 shadow-md shadow-gray-200 mt-5">
                {" "}
                <GiSelfLove className="text-white text-2xl" />
                <h2 className="text-xl font-semibold text-white">
                  My WishList
                </h2>
              </div>
              <div className="flex  items-center mt-5 ">
                <div className="w-[20px] h-[20px] bg-gray-400 rounded-r-full ml-8 hover:rotate-180 hover:bg-red-300  "></div>
                <div>
                  <Link
                    to="/profile/personalinfo"
                    className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
                  >
                    {" "}
                    Wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;
