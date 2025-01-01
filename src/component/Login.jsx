import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailerror, setEmailerror] = useState("");
  let [passworderror, setPassworderror] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderror("");
  };
  let handleSubmit = () => {
    if (!email) {
      setEmailerror("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerror("Invalid Email");
    }
    if (!password) {
      setPassworderror("Password is required");
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;

          if (error.code.includes("auth/invalid-credential")) {
            setEmailerror("Invalid-credential");
          }

          console.log(errorCode);
        });
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
              Log in to Exclusive
            </h2>
            <p className="text-[16px] mt-[10px] mb-16">
              Enter your details below
            </p>

            <input
              onChange={handleEmail}
              className={`px-20 py-3  outline-none border-b-2 ${
                emailerror ? "border-red-500" : "border-gary-500"
              }  block `}
              placeholder="Email"
              type="text"
              value={email}
            ></input>
            {emailerror && (
              <p className="text-red-500 text-[10px] ">{emailerror}</p>
            )}
            <input
              onChange={handlePassword}
              className={`px-20 py-3  outline-none border-b-2 ${
                passworderror ? "border-red-500" : "border-gary-500"
              }  block relative`}
              placeholder="password"
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
              <p className="text-red-500 text-[10px] ">{passworderror}</p>
            )}
            <div className="  mt-12 ">
              <div className=" relative content-start">
                <button
                  onClick={handleSubmit}
                  className="bg-[#DB4444] px-[70px] text-white font-semibold py-3 rounded-sm shadow-lg shadow-gray-200 block mb-5"
                >
                  {" "}
                  Login
                </button>
              </div>
              <div className="mt-2 ">
                <Link className="text-green-800 mr-10" to="/signup">
                  {" "}
                  Sign Up
                </Link>
                <Link className="text-red-500 " to="/">
                  {" "}
                  Forget password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
