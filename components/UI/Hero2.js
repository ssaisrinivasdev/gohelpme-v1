import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="bg-black">
      <section className=" mx-auto max-w-screen-xl px-4 items-center lg:flex md:px-8 py-56">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            We have got you Covered
            <span className="text-color1">
              {" "}
              Start a fund and make your life
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Get started
            </a>
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try it out
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 ">
          <Image
            src="/images/help.jpg"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            height={1250}
            width={1250}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero2;
