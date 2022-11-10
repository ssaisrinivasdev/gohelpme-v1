import React, { useState } from "react";
import Header from "../components/UI/Header";
import Link from "next/link";
import { useRouter } from "next/router";

export default function login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const router = useRouter()

  const LoginPost = async () => {
    const loginCredentials = {email, password}

    let result = await fetch("http://gohelpme.online/api/login", {
      method: "POST",
      body: JSON.stringify(loginCredentials),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })

    
    const error = await result.json();
    console.log(error.error)
    console.log(result.status)

    if(200 <= result.status < 300) {
      
      router.push("/dashboard")
  
      }

  }



  return (
    <div>
      <Header />
      <div className="py-24">
        <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md">
          <h1 class="text-3xl font-semibold text-center text-color1">
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
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
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
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </div>

            <div class="mt-6">
              <button onClick={LoginPost} type="button" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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
