import React, { useContext, useState, createContext } from "react";
import Header from "../components/UI/Header";
import { useRouter } from "next/router";
import GlobalContext from "../store/global-context";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Footer from "../components/UI/Footer";


function Registration() {
  
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const router = useRouter()
  const globalData = useContext(GlobalContext)

  const regisHandler = async (data) => {
      

    const {name, lastname, email, password} = data
    console.log(data)


    const res = await fetch("http://gohelpme.online/api/register", {
      method: "POST",
      headers: {
            'Content-Type': 'application/json',
          },
      body: JSON.stringify(data),
  })

  const response = await res.json();
  

    const {error} = response;
    const {message} = response;

    if(res.status >= 200 && res.status <=205)
    {
      
      console.log('Success:', data);
      globalData[2].setUsername(name)
        globalData[0].setEmail(email)
        router.push("/verification")
    } else if (res.status >= 400 && res.status <= 405)
    {
      console.log(`${error} : ${message}`)
      alert(`${error} : ${message}`)

      if((response.toString()).includes("Invalid User") || (response.toString()).includes("User not logged in ") || (response.toString()).includes("User Not Found") || (response.toString()).includes("Please Login to Access"))
      {
        //Route to LOGIN and change global variable status!!
        router.push("/login")
        globalData[1].setIsLoggedIn(false)
      }
      // else
      // {
      //   if((error).toString() != "Something went wrong")
      //   {
      //     alert((message).toString());
      //   }
      //   else{
      //     alert((error).toString());
      //   }
      // }
      
    } else {

    }











    // fetch('http://gohelpme.online/api/register', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   globalData[2].setUsername(response.name)
    //     globalData[0].setEmail(email)
    //     router.push("/verification")
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

    





      


// const {status} = result;
    
    // console.log(error.error)
    // console.log(result.status)
    // console.log(globalData.email)
    // console.log(email)

  };

  return (

<div>
      <Header />
      <div className="py-24 drop-shadow-md bg-slate-100">
        <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md">
          <h1 class="text-3xl font-semibold text-center text-color1">
            Sign Up
          </h1>

          <form class="mt-6" onSubmit={handleSubmit(regisHandler)}>
            <div>
              <label for="username" class="block text-sm text-gray-800 ">
                Username
              </label>
              <input
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("name", {
              required: "Username is required.",
            })}
              />
              {errors.name && errors.name.type === "required" && (
            <p className="errorMsg">Username is required.</p>
          )}
            </div>

            <div>
              <label for="username" class="block text-sm text-gray-800 ">
                Lastname
              </label>
              <input
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("lastname", {
              required: "Lastname is required.",
            })}
              />
              {errors.lastname && errors.name.type === "required" && (
            <p className="errorMsg">Lastname is required.</p>
          )}
            </div>

            <div>
              <label for="Email" class="block text-sm text-gray-800 ">
                Email
              </label>
              <input
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}  
              />
              {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
            </div>

            <div>
              
                <label for="password" class="block text-sm text-gray-800 ">
                  Password
                </label>
             

              <input
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password should be at-least 8 characters."
              }
            })} 
              />
               {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
            </div>

            <div class="mt-6">
              <input type="submit" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" value="SignUp" />
            </div>
          </form>

          <p class="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Already have an account?{" "}
            <Link
              href="/login"
              class="font-medium text-gray-700 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>






















    
    // <div>
    //   <Header />
    //   <section className="bg-white ">
    //     <div className="container flex items-center justify-center min-h-min px-6 mx-auto">
    //       <form className="w-full max-w-md">
    //         <div className="flex items-center justify-center mt-6">
    //           <Link
    //             href="#"
    //           >
    //             <h1 class="text-3xl font-semibold text-center text-color1">
    //         Sign Up
    //       </h1>
    //           </Link>
    //         </div>

    //         <div className="relative flex items-center mt-8">
    //           <span className="absolute">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 mx-3 text-gray-300 "
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    //               />
    //             </svg>
    //           </span>

    //           <input
    //             type="text"
    //             className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //             placeholder="Firstname"
    //             value={name}
    //             onChange={(event) => {
    //               setFirstname(event.target.value);
    //             }}
    //           />

    //           <input
    //             type="text"
    //             className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //             placeholder="Lastname"
    //             value={lastname}
    //             onChange={(event) => {
    //               setLastname(event.target.value);
    //             }}
    //           />
    //         </div>

    //         {/* <label
    //           for="dropzone-file"
    //           className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-md cursor-pointer "
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6 text-gray-300 "
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             stroke-width="2"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    //             />
    //           </svg>

    //           <h2 className="mx-3 text-gray-400">Profile Photo</h2>

    //           <input id="dropzone-file" type="file" className="hidden" />
    //         </label> */}

    //         <div className="relative flex items-center mt-6">
    //           <span className="absolute">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 mx-3 text-gray-300 "
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //               />
    //             </svg>
    //           </span>

    //           <input
    //             type="email"
    //             className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //             placeholder="Email address"
    //             value={email}
    //             onChange={(event) => {
    //               setEmail(event.target.value);
    //             }}
    //           />
    //         </div>

    //         <div className="relative flex items-center mt-4">
    //           <span className="absolute">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 mx-3 text-gray-300 "
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    //               />
    //             </svg>
    //           </span>

    //           <input
    //             type="password"
    //             className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md :border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(event) => {
    //               setPassword(event.target.value);
    //             }}
    //           />
    //         </div>

    //         {/* <div className="relative flex items-center mt-4">
    //           <span className="absolute">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 mx-3 text-gray-300 "
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    //               />
    //             </svg>
    //           </span>

    //           todo: add confirm password logic

    //           <input
    //             type="password"
    //             className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //             placeholder="Confirm Password"
    //           />
    //         </div> */}

    //         <div className="mt-6">
    //           <button
    //             type="button"
    //             onClick={regisHandler}
    //             className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-color1 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
    //           >
    //             Sign Up
    //           </button>

    //           <div className="mt-6 text-center ">
    //             <Link href="/login" className="text-sm text-blue-500 hover:underline ">
    //               Already have an account?
    //             </Link>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </section>
    // </div>
   
  );
}

export default Registration;
