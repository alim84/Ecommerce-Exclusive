import { LiaFirstOrderAlt } from "react-icons/lia";

const MyOrders = () => {
  return (
    <>
      <div className="w-[1150px] ml-2 ">
        <div className="flex items-center px-5 py-6 mt-10 bg-red-400">
          <div className="w-[50px] h-[50px] bg-yellow-100 rounded-full mr-3">
            <LiaFirstOrderAlt className="text-red-400 text-3xl ml-[10px] mt-[10px]" />
          </div>
          <div className="flex items-center gap-5">
            <div>
              <h2 className="font-bold text-xl text-white ">My Orders</h2>
              <p className="text-[12px] text-white">
                Manage all your personal information
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[1100px] grid grid-cols-10 p-4">
          <div className="mr-1">
            <div className="bg-gray-100 py-2  mb-2 text-center font-semibold ">
              <h3>Invoice No</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Items</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Outlet</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Status</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Payment Status</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Service Charge</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Total</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Sut</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Action</h3>
            </div>
            <p className="text-center">No</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
