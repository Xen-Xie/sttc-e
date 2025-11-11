import React from "react";
import { Link } from "react-router";
import Btn from "../../../components/common/UI/Btn";

function Hero() {
  return (
    <>
      {/* Mobile Only Area */}
      <div className="md:hidden px-4 mt-3 font-inter">
        <Link
          to="#"
          className="bg-primary text-primarybg rounded-xl p-8 flex flex-col items-center text-center"
        >
          <h2 className="text-2xl font-semibold leading-snug">
            Keep cosy
            <br />
            with these
            <br />
            bestselling finds
          </h2>

          <Btn variant="secondary" className="mt-6">
            Shop cuddly pieces
          </Btn>
        </Link>
      </div>
      {/* Desktop/Laptop only Area */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-0 lg:gap-5 p-4 mx-auto max-w-6xl">
        {/* Left Area */}
        <Link
          to="#"
          className="col-span-2 flex h-[360px] group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          {/* Left Text Box */}
          <div className="bg-primary text-primarybg p-10 flex flex-col justify-center w-1/2">
            <h1 className="text-3xl font-semibold leading-tight font-urbanist">
              Gifts that
              <br />
              show you care
            </h1>
            <Btn variant="secondary" className="mt-6">
              Shop original pieces
            </Btn>
          </div>

          {/* Middle Image */}
          <div className="overflow-hidden w-1/2">
            <img
              src="/giftImage.png"
              className="w-full h-full object-cover"
              alt="Gift items"
            />
          </div>
        </Link>

        {/* Right Area */}
        <Link
          to="#"
          className="relative h-[360px] hidden lg:block rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[101%] hover:shadow-xl"
        >
          <img
            src="/hero.png"
            className="w-full h-full object-cover"
            alt="Tradition pieces"
          />

          <div className="absolute bottom-6 left-6 text-primarybg">
            <h2 className="text-2xl font-bold leading-tight">
              Pieces that will
              <br />
              start new traditions
            </h2>
            <button className="mt-3 underline text-lg">Shop now</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Hero;
