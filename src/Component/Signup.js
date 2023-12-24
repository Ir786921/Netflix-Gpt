import React, { useRef, useState } from "react";
import { validation } from "../utlis/Validation";

const Signup = () => {
  const [isclick, setIsclick] = useState(false);
  const [validationText, setValidationText] = useState(" ");
  const email = useRef(null);
  const password = useRef(null);
  const fname = useRef(null);

  function clickHandle() {
    setIsclick(!isclick);
  }
  function LoginClicked() {
    const text = validation(
      email?.current?.value,
      password?.current?.value,
      fname?.current?.value
    );
    setValidationText(text);
  }

  return (
    <div className=" m-auto p-4 bg-black opacity-85 rounded-md shadow-md w-[450px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className="  flex justify-center flex-col "
      >
        <h1 className=" text-start text-white font-bold text-3xl ml-10">
          {isclick ? "SignUp" : "Login"}
        </h1>
        <br />
        {isclick && (
          <>
            <input
              type="text"
              ref={fname}
              className=" bg-[#333333] w-[350px] m-auto p-2 rounded-md shadow-sm text-white"
              placeholder="Full Name"
            />
            <br />
          </>
        )}

        <input
          type="email"
          ref={email}
          className=" bg-[#333333] w-[350px] m-auto p-2 rounded-md shadow-sm text-white"
          placeholder="Email or Phone Number"
        />
        <br />
        <input
          type="password"
          ref={password}
          className=" bg-[#333333] w-[350px] m-auto p-2 rounded-md shadow-sm text-white"
          placeholder="Password"
        />
        <br />
        <p className=" text-[#E50914] text-lg font-semibold ml-10">
          {validationText}
        </p>
        <br />

        <button
          className="  w-[350px] m-auto p-2 rounded-md shadow-sm text-white bg-[#E50914]"
          onClick={LoginClicked}
        >
          {isclick ? "SignUp" : "Login"}
        </button>
      </form>
      <br />
      <p className=" text-gray-600 text-lg ml-10 cursor-pointer">
        {isclick ? "Already registered" : "new to netflix"} ? &nbsp;
        <span className=" text-white" onClick={clickHandle}>
          {" "}
          {isclick ? "login" : "Sign up now"}
        </span>
      </p>
    </div>
  );
};

export default Signup;
