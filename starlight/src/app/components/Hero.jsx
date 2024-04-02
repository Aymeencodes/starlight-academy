"use client";
import Image from "next/image";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
function Hero() {

  return (
    <div>
      <div className=" max-container padding-container items-center flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
        <div className=" hero-map" />
        <div className=" relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            src="/images/book.png"
            alt="book"
            width={100}
            height={100}
            className=" absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <h1 className=" bold-52 lg:bold-88">
            Starlight: Where Brilliance Shines
          </h1>
          <p className=" regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            "Starlight School: A nurturing haven where students flourish,
            empowered to unleash their potential. Here, academic excellence
            meets a vibrant community, igniting passion and fostering lifelong
            learners."
          </p>
          <div className=" flex items-center gap-5">
            <div className="rating my-11">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-800"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-800"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-800"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-800"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-blue-800"
              />
            </div>
            <p className=" bold-16 lg:bold-20 text-blue-70">
              189k{" "}
              <span className=" regular-16 lg:reuglar-20 ml-1">
                Exelent Reviews
              </span>
            </p>
          </div>
          <div className=" flex flex-col w-full gap-2 sm:flex-row">
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className=" hover:bg-blue-900 transition-all ease-in btn_blue flexCenter gap-3 rounded-full border"
            >
              See Location
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog ">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                {/*<div className=" mt-3 w-[100%]">
                  <iframe
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(starlight)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                  ></iframe>
                  <a href="https://www.gps.ie/">gps systems</a>
  </div>*/}
              </div>
            </dialog>
            <a
              href="#services"
              className=" btn_white_text font-bold flexCenter gap-2 rounded-full border"
            >
              <FaQuestion className=" text-blue-800" />
              How we work ?
            </a>
          </div>
        </div>
        <div className="   relative xl:flex block flex-1 items-start ">
          <img className="hidden  xl:flex" src="images/banner.png" alt="" />
          <div className=" relative left-0 xl:hidden z-20 flex w-[290px] sm:w-[500px] md:w-[600px]  flex-col gap-8 rounded-3xl bg-purple-900 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">starlight</p>
                <IoMdClose className=" text-white text-2xl" />
              </div>
              <p className="bold-20 text-white">for smart students</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">success</p>
                <p className="bold-20 text-white">100 %</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Reviews</p>
                <p className="bold-20 text-white">5 stars !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="diff aspect-[9/1]">
        <div className="diff-item-1">
          <div className="bg-blue-800 text-primary-content text-xl md:text-3xl font-black grid place-content-center">
            Starlight
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-xl  md:text-3xl text-blue-800 font-black grid place-content-center">
            The best school ever
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
}

export default Hero;
