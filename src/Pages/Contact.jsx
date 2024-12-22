import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 mt-20">
          <div>
            <div className="mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-[30px] h-[30px] relative rounded-full bg-red-400">
                  <IoMdCall className="text-white absolate translate-x-[7px] translate-y-[7px]" />
                </div>

                <h3 className="text-[18px] font-semibold ">Call to Us</h3>
              </div>
              <p className="text-[12px] mt-4">
                We are avalaible 24/7, 7 days a week
              </p>
              <p className="text-[12px] mt-4">Phone: +880-17179867</p>
            </div>

            <div className="mb-20 ">
              <div className="flex gap-4 items-center mt-10">
                <div className="w-[30px] h-[30px] relative rounded-full bg-red-400">
                  <MdEmail className="text-white  absolate translate-x-[7px] translate-y-[7px] " />
                </div>

                <h3 className="text-[18px] font-semibold ">Write to US</h3>
              </div>
              <p className="text-[12px] mt-4">
                Fill out our form and we will contact <br></br> you within 24
                hours.
              </p>
              <p className="text-[12px] mt-4">Email: alimscohfw@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex gap-8  items-center">
              <input
                className="py-2 px-6 outline-none border-2 border-blue-200 rounded-md hover:border-red-200"
                type="text"
                placeholder="Your Name "
              ></input>
              <input
                className="py-2 px-6 outline-none border-2 border-blue-200 rounded-md hover:border-red-200"
                type="text"
                placeholder="Your Name "
              ></input>
              <input
                className="py-2 px-6 outline-none border-2 border-blue-200 rounded-md hover:border-red-200"
                type="text"
                placeholder="Your Name "
              ></input>
            </div>
            <div className="mt-10">
              <textarea className="outline-none border-2  border-blue-200 hover:border-red-200 w-[780px] h-[100px]"></textarea>
            </div>
            <div className="flex justify-center mt-10">
              <button className="px-10 py-2 text-white bg-red-400 rounded-md font-mono">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
