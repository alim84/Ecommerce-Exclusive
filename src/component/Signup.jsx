import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [nameerror, setNameerror] = useState("");
  let [emailerror, setEmailerror] = useState("");
  let [passworderror, setPassworderror] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);

  let handleName = (e) => {
    setName(e.target.value);
    setNameerror("");
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderror("");
  };
  let handleSubmit = () => {
    if (!name) {
      setNameerror("Name is required");
    }
    if (!email) {
      setEmailerror("Email is required");
    }
    if (!password) {
      setPassworderror("Password is required");
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 mt-24 gap-20 justify-between items-center mb-16">
          <div>
            <img src="/public/images/Signup.png"></img>
          </div>
          <div>
            <h2 className="text-[36px] text-mono font-bold">
              Create an Account
            </h2>
            <p className="text-[16px] mt-[10px]">Enter your details below</p>
            <input
              onChange={handleName}
              className="px-20 mt-10 py-3  outline-none border-b-2 border-gary-500 block "
              placeholder="Name"
              type="text"
              value={name}
            ></input>
            {nameerror && (
              <p className="text-red-500 text-[10px] mb-6">{nameerror}</p>
            )}
            <input
              onChange={handleEmail}
              className="px-20 py-3  outline-none border-b-2 border-gary-500 block "
              placeholder="Email"
              type="text"
              value={email}
            ></input>
            {emailerror && (
              <p className="text-red-500 text-[10px] mb-6">{emailerror}</p>
            )}
            <input
              onChange={handlePassword}
              className="px-20 py-3  outline-none border-b-2 border-gary-500 block relative "
              placeholder="Password"
              type={passwordshow ? "text" : "password"}
              value={password}
            ></input>
            {passwordshow ? (
              <FaEye
                onClick={() => setPasswordshow(false)}
                className="absolate translate-y-[-30px] translate-x-[320px] cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordshow(true)}
                className="absolate translate-y-[-30px] translate-x-[320px] cursor-pointer"
              />
            )}
            {passworderror && (
              <p className="text-red-500 text-[10px] mb-6">{passworderror}</p>
            )}
            <div className=" relative content-start">
              <button
                onClick={handleSubmit}
                className="bg-[#DB4444] px-[70px] text-white font-semibold py-3 rounded-sm shadow-lg shadow-gray-200 block mb-5"
              >
                {" "}
                Create Account
              </button>

              <FcGoogle className="absolate translate-x-[30px] translate-y-[34px]" />
              <button className="border-2  border-black outline-none px-[54px] py-3 rounded-sm shadow-lg shadow-gray-200 mb-5">
                {" "}
                Sign up with Google
              </button>
            </div>
            <div className="flex gap-5 ">
              <p>Already have account?</p> <Link to="/"> Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
