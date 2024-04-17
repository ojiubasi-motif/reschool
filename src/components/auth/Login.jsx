import React from "react";
import LoginImg from "../../../public/img/sch1.svg";
import { SlLogin } from "react-icons/sl";

const Login = () => {
  return (
    <div className="flex justify-center items-center p-20">
      <span className="basis-3/6 rounded-md">
        <img className="object-contain" src={LoginImg} alt="loginImg" />
      </span>
      <div className="basis-2/6 flex items-center justify-start">
        <form className="w-[70%]">
          <span className="mb-2 flex flex-col items-start justify-center">
            <label className="font-bold" htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="myemail@mail.com"
              className="form-input p-3 h-16 w-[100%] rounded-md border-2 border-primaryBorderColor"
              // onChange={handleChange}
              type="email"
              // value={data?.email}
              name="email"
            />
          </span>
          <span className="flex flex-col items-start justify-center">
            <label className="font-bold" htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="********"
              className="form-input p-3 h-16 w-[100%] rounded-md border-2 border-primaryBorderColor"
              // onChange={handleChange}
              type="password"
              // value={data?.email}
              name="password"
            />
          </span>

          <button className="flex items-center justify-center text-textColorWhite mt-4 p-2 px-4 rounded-md bg-bgPrimary">
            Login
            <SlLogin className="ms-1 text-textColorWhite" fontWeight={"bold"} size={12}/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
