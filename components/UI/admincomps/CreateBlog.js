import React from "react";
import { useForm } from "react-hook-form";

function CreateBlog() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();

    for (const name in data) {
      formData.append(name, data[name]);
    }

    for (var i = 0; i < data.images.length; i++)
      formData.append("image", data.images[i]);

    const res = await fetch("http://gohelpme.online/api/createfund", {
      method: "POST",
      body: formData,
    });

    const response = await res.json();

    const { error } = response;
    const { message } = response;

    if (res.status >= 200 && res.status <= 205) {
      console.log("Success:", response);
      console.log(error, message);
      const { fund } = response;
      router.push("/fundraisers/" + fund._id);
    } else if (res.status >= 400 && res.status <= 405) {
      alert(`${error} : ${message}`);

      if (
        response.toString().includes("Invalid User") ||
        response.toString().includes("User not logged in ") ||
        response.toString().includes("User Not Found") ||
        response.toString().includes("Please Login to Access")
      ) {
        //Route to LOGIN and change global variable status!!
        router.push("/login");
        globalData[1].setIsLoggedIn(false);
      } else {
        if (error.toString() != "Something went wrong") {
          alert(message.toString());
        } else {
          alert(error.toString());
        }
      }
    }
  };

  return (
    <section class="mt-10 bg-gray-100">
      <div class=" max-w-screen-xl sm:px-6 lg:px-8 max-md:w-[350px] mx-auto">
        <div class="max-md:w-[350px] mx-auto lg:w-[600px]">
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" onSubmit={handleSubmit(onSubmit)} class="space-y-4">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Title
                  </label>
                  <input
                    {...register("title")}
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="title"
                    placeholder="Title of your post"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="">
                <label
                  for="dropzone-file"
                  className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-md cursor-pointer "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-300 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>

                  <h2 className="mx-3 text-gray-400">Upload Image</h2>

                  <input type="file" {...register("images")} />
                </label>
              </div>

              <div>
                <label className="sr-only" for="message">
                  Description
                </label>
                <textarea
                  {...register("long_description", {
                    required: true,
                  })}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Description"
                  rows="8"
                  id="description"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Update"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateBlog;
