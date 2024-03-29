import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handler = async (data) => {
    console.log(data);
    const res = await fetch(`http://gohelpme.online/api/admin/login`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    console.log(response);

    if (res.status >= 200 && res.status <= 205) {
      const { admin_token } = response;
      console.log("Success:", response);

      // Perform localStorage action
      localStorage.setItem("admin_token", admin_token);
      //Cookies.set("admin_token", admintoken);
      router.push("/adminpanel");
    }else{
      alert("Login Failed")
    }
  };

  return (
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Admin Panel Login
        </h1>

        <form
          onSubmit={handleSubmit(handler)}
          class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <p class="text-lg font-medium">Sign in to your account</p>

          <div>
            <label for="email" class="text-sm font-medium">
              Email
            </label>

            <div class="relative mt-1">
              <input
                {...register("email")}
                type="email"
                id="email"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="text-sm font-medium">
              Password
            </label>

            <div class="relative mt-1">
              <input
                {...register("password")}
                type="password"
                id="password"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <input
            type="submit"
            value="Sign In"
            class="cursor-pointer block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          />

          {/* <p class="text-center text-sm text-gray-500">
            No account?
            <a class="underline" href="">
              Sign up
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
