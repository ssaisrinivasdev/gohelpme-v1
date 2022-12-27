import React from "react";

function SingleBlog({ data }) {
  console.log(data);
  return (
    <div>
      <section class="bg-white ">
        <div class=" px-6 py-10 mx-auto">
          {/* <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
            From the blog
          </h1> */}

          <div class="mt-8 lg:-mx-6 lg:flex flex-col lg:items-center">
            <img
              class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={
                data.post.images[0] ||
                "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
              alt=""
            />

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              {/* <p class="text-sm text-blue-500 uppercase">category</p> */}

              <a
                href="#"
                class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline  md:text-3xl"
              >
                {data.post.title}
              </a>

              <p class="mt-3 text-sm text-gray-500  md:text-sm">
                {data.post.long_description}
              </p>

              <div class="flex items-center mt-6">
                <div class="">
                  <h1 class="text-sm text-gray-700 ">By Gohelpme Editorial</h1>
                  <p class="text-sm text-gray-500 ">
                    {data.post.createdAt.substring(0, 10)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleBlog;
