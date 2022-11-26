import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div className="bg-cover bg-center bg-[url('/images/bg.jpg')] md:bg-[url('/images/hero1.svg')] py-36">
      <div className="max-md:max-w-md md:max-w-xl mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
        <Search />
        <section className="mt-8 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 ">
          <div className="text-center space-y-4">
            <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
              Help is Just Around <br />
              the
              <span className="text-color1"> Corner</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Start your fund now to support any cause
            </p>
          </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <a
              href="javascript:void(0)"
              className="px-10 py-3.5 w-full bg-color1 text-white text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="px-10 py-3.5 w-full text-gray-100 text-center border rounded-md duration-300 hover:text-black hover:shadow hover:bg-[#e4e4e4] bg-[#333333] block sm:w-auto"
            >
              How it Works
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
