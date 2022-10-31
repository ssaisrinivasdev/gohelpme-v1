import React from "react";
import Header from "../components/UI/Header";
import Link from "next/link";

export default function login() {
  return (
    <div>
      <Header />
      <div className="py-24">
        <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md">
          <h1 class="text-3xl font-semibold text-center text-gray-700">
            Sign In
          </h1>

          <form class="mt-6">
            <div>
              <label for="username" class="block text-sm text-gray-800 ">
                Username
              </label>
              <input
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="mt-4">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm text-gray-800 ">
                  Password
                </label>
                <a href="#" class="text-xs text-gray-600 ">
                  Forget Password?
                </a>
              </div>

              <input
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="mt-6">
              <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
          </form>

          <p class="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Don't have an account?{" "}
            <Link
              href="/registration"
              class="font-medium text-gray-700 hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
