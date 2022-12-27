import React, { useContext, useState, useEffect } from "react";
import Header from "../components/UI/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import GlobalContext from "../store/global-context";
import Footer from "../components/UI/Footer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addDetails } from "../store/actions/user";
import useLoginCheck from "../hooks/use-logincheck";
import Cookies from "universal-cookie";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const isLoggedIn = useLoginCheck();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const globalData = useContext(GlobalContext);

  const LoginPost = async (data) => {
    const { email, password } = data;

    signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    const res = await fetch("http://gohelpme.online/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (res.status >= 200 && res.status <= 205) {
      const { token } = response;
      // console.log("Success:", response);

      // Perform localStorage action
      localStorage.setItem("token", token);
      cookies.set("token", token);
      cookies.set("isLoggedIn", isLoggedIn);
      // dispatch(addToken("token", token));

      const name = response.response.name;
      const lastname = response.response.lastname;
      const email = response.response.email;

      globalData[1].setIsLoggedIn(true);

      dispatch(
        addDetails({
          name: name,
          lastname: lastname,
          email: email,
        })
      );

      globalData[2].setUsername(name);

      router.push("/dashboard");
    } else if (res.status >= 400 && res.status <= 405) {
      const { error } = response;
      const { message } = response;

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
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="py-24 drop-shadow-md bg-slate-100">
        <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md">
          <h1 class="text-3xl font-semibold text-center text-color1">
            Sign In
          </h1>

          <form class="mt-6" onSubmit={handleSubmit(LoginPost)}>
            <div>
              <label for="username" class="block text-sm text-gray-800 ">
                Email
              </label>
              <input
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMsg">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMsg">Email is not valid.</p>
              )}
            </div>

            <div class="mt-4">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm text-gray-800 ">
                  Password
                </label>
                <Link href="/forgotpassword" class="text-xs text-gray-600 ">
                  Forgot Password?
                </Link>
              </div>

              <input
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="errorMsg">Password is required.</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="errorMsg">
                  Password should be at-least 8 characters.
                </p>
              )}
            </div>

            <div class="mt-6">
              <input
                type="submit"
                value="SignIn"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
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
      <Footer />
    </div>
  );
}
