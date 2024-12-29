import { FaUserTie } from "react-icons/fa6";
const Uploadapi = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex items-center px-5 py-6 mt-10 bg-gray-400">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full mr-3">
            <FaUserTie className="text-gray-700 text-xl ml-[15px] mt-[10px]" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-purple-600 ">Admin User</h2>
            <h3 className="font-bold text-xl text-white ">
              Upload Product Item
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 p-10">
          <div className="mb-6">
            <level className="font-semibold block">Product Name</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Product Details</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Price</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Discount Price</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Upload Date</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="date"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Discount</level>

            <select className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md">
              <option>10%</option>
              <option>20%</option>
              <option>30%</option>
              <option>40%</option>
              <option>50%</option>
              <option>60%</option>
              <option>70%</option>
              <option>80%</option>
              <option>90%</option>
              <option>100%</option>
            </select>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">
              Product Classification
            </level>

            <select className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md">
              <option>Men</option>
              <option>Women</option>
              <option>Child</option>
              <option>Electronics</option>
              <option>Home & Lifestyle</option>
              <option>Medicine</option>
              <option>Sports & Outdoor</option>
              <option>Baby & Outdoor</option>
              <option>Groceries & Pets</option>
              <option>Health & Beauty</option>
            </select>
          </div>
          <div className="mb-6">
            <level className="font-semibold block"> Name</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block"> Product Image</level>
            <input type="file" id="img" name="img" accept="image/*"></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block"> Product Image</level>
            <input type="file" id="img" name="img" accept="image/*"></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block"> Product Image</level>
            <input type="file" id="img" name="img" accept="image/*"></input>
          </div>
        </div>
        <button className="px-32 py-3 rounded-md bg-red-400 text-white hover:bg-teal-800 hover:text-white  hover:font-bold flex mx-auto mb-12">
          Update
        </button>
      </div>
    </>
  );
};

export default Uploadapi;
