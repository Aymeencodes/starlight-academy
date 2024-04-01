"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
function page() {
  const router = useRouter();
  const [userDate, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState("");
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      const response = await axios.post(
        `http://localhost:3001/api/users/register`,
        userDate
      );
      const newUser = await response.data;
      console.log(newUser);
      if (!newUser) {
        seterror("couldn't register user");
      }
      router.push('/login');

    } catch (err) {
      seterror(err.response.data.message);
    }
  };
  return (
    <div>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="/images/draw.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <h1 className=" text-center mb-7 text-3xl font-bold">Sign up</h1>
              <form onSubmit={registerUser}>
                {error && (
                  <p className=" text-white font-semibold mb-5 text-xl pl-3 p-2  rounded-lg bg-red-800">
                    {error}
                  </p>
                )}{" "}
                {/* <!-- Email input --> */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={userDate.name}
                  onChange={changeInputHandler}
                  placeholder="name"
                  className=" text-black p-2 w-full outline-1 outline-gray-30 border border-gray-20 rounded-md  mb-6"
                />
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={userDate.email}
                  onChange={changeInputHandler}
                  placeholder="email"
                  className=" text-black p-2 w-full outline-1 outline-gray-30 border border-gray-20 rounded-md  mb-6"
                />
                {/* <!--Password input--> */}
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  value={userDate.password}
                  onChange={changeInputHandler}
                  placeholder="password"
                  className=" text-black p-2 w-full outline-1 outline-gray-30 border border-gray-20 rounded-md  mb-6"
                />
                {/* <!-- Remember me checkbox --> */}
                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign up
                </button>
                {/* <!-- Divider --> */}
                <div className=" mt-8 flex justify-around">
                  <h2 className=" ">have an account ? </h2>
                  <a
                    href="/login"
                    className="regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold underline italic"
                  >
                    Login
                  </a>
                </div>
                {/* <!-- Social login buttons --> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
