import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";

const Nabbar = () => {
  return (
    <>
      <div className="text-center bg-black py-4">
        <h2 className="text-white">
          Summer Sale For All Swim Suits And Free Express Delivery -{" "}
          <b>OFF 50%! ShopNow</b>
        </h2>
      </div>
      <div className="container mx-auto text-md font-semibold ">
        <div className="flex justify-between items-center py-5">
          <div>
            <h1 className="text-3xl font-mono font-semibold">Exclusive</h1>
          </div>
          <div>
            <ul className="flex gap-12">
              <Link to="/">
                <li className=" hover:text-teal-900">Home</li>
              </Link>
              <Link to="/contact">
              <li className=" hover:text-teal-900">Contract</li>
              </Link>
              <Link to="/login">
                <li className=" hover:text-teal-900">Sign in</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="px-6 py-3 outline-none border-2 border-sky-300 rounded-md "
              type="text"
              placeholder="Search Your Item"
            ></input>
            <CiSearch className="absolate translate-x-[-50px]" />

            <div>
              <Link
                to="/wishlist"
                className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
              >
                {" "}
                <GiSelfLove />
              </Link>
            </div>
            <div>
              <Link
                to="/cart"
                className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-500"
              >
                {" "}
                <IoCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nabbar;
