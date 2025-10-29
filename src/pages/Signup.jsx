import { Key, Mail, User } from "lucide-react";
import React from "react";

const Signup = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-200 to-white min-h-screen px-6 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-4xl md:text-2xl text-gray-700 mb-6 font-bold text-center">
          Create Account
        </h2>

        <form className="flex flex-col gap-4">
          <div className="">
            <label className="text-md md:text-md font-semibold ">
              Name:
            </label>
            <div className="flex gap-2 items-center mt-2 border rounded-md">
              <User size={26} className="m-2" />
              <input
                type="text"
                className=" py-2 bg-gray-50 outline-none w-full"
                placeholder="Enter your name"
              />
            </div>
          </div>

           <div className="">
            <label className="text-md md:text-md font-semibold ">
              Email:
            </label>
            <div className="flex gap-2 items-center mt-2 border rounded-md">
              <Mail size={26} className="m-2" />
              <input
                type="email"
                className=" py-2 bg-gray-50 outline-none w-full"
                placeholder="Enter your email"

              />
            </div>
          </div>

           <div className="">
            <label className="text-md md:text-md font-semibold  ">
              Password:
            </label>
            <div className="flex gap-2 items-center mt-2 border rounded-md">
              <Key size={26} className="m-2" />
              <input
                type="password"
                className=" py-2 bg-gray-50 outline-none w-full"
                placeholder="Enter your name"

              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
