import { FaUserTie } from "react-icons/fa6";
const PersonalInfo = () => {
  return (
    <>
      <div className="w-[1150px] ml-2 ">
        <div className="flex items-center px-5 py-6 mt-10 bg-gray-400">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full mr-3">
            <FaUserTie className="text-gray-700 text-xl ml-[15px] mt-[10px]" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white ">Personal Info</h2>
            <p className="text-[12px] text-white">
              Manage all your personal information
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 p-10">
          <div className="mb-6">
            <level className="font-semibold block">First Name</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Last Name</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Date of birth</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="date"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Mobile No.</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Email Address</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="email"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Gender</level>

            <select className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Company Name</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Occupation</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Marital Status</level>
            <select className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md">
              <option>Married</option>
              <option>Single</option>
            </select>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Designation</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Avg. Monthly Income</level>
            <select className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md">
              <option>5K-20K</option>
              <option>21K-50K</option>
              <option>51K-75K</option>
              <option>76K-100K</option>
              <option>100K+</option>
            </select>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">Religion</level>
            <select className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md">
              <option>Islam</option>
              <option>Hindu</option>
              <option>Christian</option>
              <option>Buddhism</option>
              <option>Others</option>
            </select>
          </div>
          <div className="mb-6">
            <level className="font-semibold block">No. of Family Members</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
          <div>
            <level className="font-semibold block">No. of Child</level>
            <input
              className="px-32 py-3 pl-2 mt-2 placeholder focus:outline-none border-2 border-gray-200 hover:border-2 focus:border-lime-200 rounded-md"
              type="text"
            ></input>
          </div>
        </div>
        <button className="px-32 py-3 rounded-md bg-red-400 text-white hover:bg-lime-400 hover:text-black  hover:font-bold flex mx-auto mb-12">
          Update
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
