import React from "react";

function BlogCards() {
  return (
    <div>
      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto">
          <div class="flex items-center justify-between">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
              recent posts{" "}
            </h1>

            <button class="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-600 transition-colors duration-300 transform hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <hr class="my-8 border-gray-200 " />

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img
                class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="/images/blog/people.jpg"
                alt=""
              />

              <div class="mt-8">
                <span class="text-blue-500 uppercase">category</span>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 ">
                  The Success stories of october
                </h1>

                <p class="mt-2 text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div class="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      class="text-lg font-medium text-gray-700 hover:underline hover:text-gray-500"
                    >
                      John snow
                    </a>

                    <p class="text-sm text-gray-500 ">Nov 1, 2022</p>
                  </div>

                  <a
                    href="#"
                    class="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="/images/blog/graph.jpg"
                alt=""
              />

              <div class="mt-8">
                <span class="text-blue-500 uppercase">category</span>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 ">
                  Overview of funds raised in 2022
                </h1>

                <p class="mt-2 text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div class="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      class="text-lg font-medium text-gray-700  hover:underline hover:text-gray-500"
                    >
                      Arthur Melo
                    </a>

                    <p class="text-sm text-gray-500 ">Nov 6, 2022</p>
                  </div>

                  <a
                    href="#"
                    class="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="/images/blog/donts.jpg"
                alt=""
              />

              <div class="mt-8">
                <span class="text-blue-500 uppercase">category</span>

                <h1 class="mt-4 text-xl font-semibold text-gray-800 ">
                  Do's and Dont's in Gohelpme
                </h1>

                <p class="mt-2 text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div class="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      class="text-lg font-medium text-gray-700  hover:underline hover:text-gray-500"
                    >
                      Tom Hank
                    </a>

                    <p class="text-sm text-gray-500 ">Oct 19, 2022</p>
                  </div>

                  <a
                    href="#"
                    class="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogCards;
