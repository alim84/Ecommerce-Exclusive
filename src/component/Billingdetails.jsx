import { Checkbox } from "@material-tailwind/react";

const Billingdetails = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2>Billing Details</h2>
        <div className="grid grid-cols-2 mb-20">
          <div>
            <div className="mt-8 mb-3">
              <level className="block mb-3">Full Name</level>
              <input
                className=" px-20 py-3 outline-none border-2 border-blue-300"
                type="text"
              ></input>
            </div>
            <div className="mt-6 ">
              <level className="block mb-3">Company Name</level>
              <input
                className=" px-20 py-3 outline-none border-2 border-blue-300"
                type="text"
              ></input>
            </div>
            <div className="mt-6 ">
              <level className="block mb-3">Streed Address</level>
              <input
                className=" px-20 py-3 outline-none border-2 border-blue-300"
                type="text"
              ></input>
            </div>
            <div className="mt-6 ">
              <level className="block mb-3">
                Appartment, Floor, etc (optional)
              </level>
              <input
                className=" px-20 py-3 outline-none border-2 border-blue-300"
                type="text"
              ></input>
            </div>
            <div className="mt-6 ">
              <level className="block mb-3">Town/City</level>
              <input
                className=" px-20 py-3 outline-none border-2 border-blue-300"
                type="text"
              ></input>
            </div>
            <div className="mt-6 ">
              <level className="block mb-3">Phone Number</level>
              <input
                className=" px-20 py-3 outline-none border-2 border-blue-300"
                type="text"
              ></input>
            </div>
            <div className="mt-6 ">
              <level className="block mb-3">Email Address</level>
              <input
                className=" px-20 py-3 outline-none border-2 border-blue-300"
                type="text"
              ></input>
            </div>
            <div className="mt-6 flex items-center gap-3 ">
              <Checkbox></Checkbox>
              <level>
                Save this information for faster check-out next time
              </level>
            </div>
          </div>

          <div className=" w-[500px]  mb-20 ">
            <div className="m-3">
              <div className="grid grid-cols-2 justify-between  items-center  mb-6">
                <h5 className="mb-2">LCD Monitor</h5>
                <p className="ml-24">$200</p>
              </div>
              <div className="grid grid-cols-2  items-center  mb-6">
                <h5 className="mb-2">Hi Gamepad</h5>
                <p className="ml-24">$300</p>
              </div>
              <div className="grid grid-cols-2  items-center border-t-2 mb-6">
                <h5 className="mb-2">Subtotal</h5>
                <p className="ml-24">$200</p>
              </div>
              <div className="grid grid-cols-2  items-center border-t-2 mb-6">
                <h5 className="mb-2">Shoping</h5>
                <p className="ml-24">fee</p>
              </div>
              <div className="grid grid-cols-2  items-center border-t-2 mb-6">
                <h5 className="mb-2">Total</h5>
                <p className="ml-24">$400</p>
              </div>
              <div className="mt-6 flex items-center gap-3 ">
                <Checkbox></Checkbox>
                <level>Bank</level>
              </div>
              <div className="mt-6 flex items-center gap-3 ">
                <Checkbox></Checkbox>
                <level>Cash on Delivery</level>
              </div>
              <div className="mt-6 flex items-center gap-3 ">
                <input
                  className="py-2 px-5 outline-none border-2 border-blue-300"
                  type="text"
                  placeholder="Coupon Code"
                ></input>
                <button className="px-6 py-2 text-white outline-none content-center bg-[#DB4444] rounded-sm ">
                  Apply Coupon
                </button>
              </div>
              <div className="text-center mt-10">
                <button className="px-6 py-2 text-white outline-none content-center bg-[#DB4444] rounded-sm ">
                  Process to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billingdetails;
