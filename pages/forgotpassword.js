
import { Router, useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Footer from '../components/UI/Footer'
import Header from '../components/UI/Header'
import ProfileForm from '../components/UI/ProfileForm'

function ForgotPassword() {

  const router = useRouter()

  
  

  const email = useSelector((state) => state.email)
  const [codeSent, setCodeSent] = useState("sendcode")
  const [isVerified, setIsVerified] = useState(false)

  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handler = async (data) => {

    const res = await fetch("http://gohelpme.online/api/sendverificationcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },  
      body: JSON.stringify(data),
    });
  
    
  
    if (res.status >= 200 && res.status <= 205) {
         setCodeSent("enterotp")
      
    }
  }

  const verificationHandler = async (data) => {
    console.log(data.otp);
    const verification_code = data.otp;

    //TODO: create email text box
    const verifyBundle = { verification_code, email };

    let result = await fetch("http://gohelpme.online/api/verify", {
      method: "POST",
      body: JSON.stringify(verifyBundle),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const response = await result.json();
    console.log(response.error);
    console.log(result.status);

    if (200 <= result.status < 300) {
      setCodeSent("verified")
      setIsVerified(true)
    }
  }

  const resetHandler = async (data) => {    

    let result_confirm_password = await fetch("http://gohelpme.online/api/resetpassword", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    const response = await result.json();
    console.log(result_confirm_password.error);
    console.log(result_confirm_password.status);

    if (200 <= parseInt(result_confirm_password.status) < 300) {

      router.push("/dashboard")
    }
  }


  return (
    <div>
      <Header />
      <section class="bg-gray-100">
  <div class=" max-w-screen-xl py-16 sm:px-6 lg:px-8 max-md:w-[500px] mx-auto">
    <div class="max-md:w-[400px] mx-auto lg:w-[600px]">

      {!isVerified ? (<div class="flex flex-col gap-5 rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
       {<form action="" onSubmit={handleSubmit(handler)} class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
            placeholder="Email"
              defaultValue={email}
            {...register("email")}
              class="w-full rounded-lg border-gray-200 p-3 text-sm"              
              type="text"
              id="email"
            />
          </div>

          <input
                type="submit"
                value={(codeSent === "enterotp") ? "Resend code": "Send Verification Code"}
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
        </form>}
        {(codeSent === "enterotp") && <form action="" onSubmit={handleSubmit(verificationHandler)} class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
            placeholder="Otp"
            {...register("otp")}
              class="w-full rounded-lg border-gray-200 p-3 text-sm"              
              type="text"
              id="otp"
            />
          </div>

          <input
                type="submit"
                value="Submit Otp"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
        </form>}
        
      </div>) : ("") }
      {isVerified ? <form action="" onSubmit={handleSubmit(resetHandler)} class="space-y-4">
          {/* <div>
            <label class="sr-only" for="name">Name</label>
            <input
            placeholder="Re-enter Email"
            {...register("email")}
              class="w-full rounded-lg border-gray-200 p-3 text-sm"              
              type="text"
              id="Re-enter-email"
            />
          </div> */}

          <div>
            <label class="sr-only" for="name">Name</label>
            <input
            placeholder="Password"
            {...register("password")}
              class="w-full rounded-lg border-gray-200 p-3 text-sm"              
              type="text"
              id="password"
            />
          </div>

          <div>
            <label class="sr-only" for="name">Name</label>
            <input
            placeholder="Confirm Password"
            {...register("confirmpassword")}
              class="w-full rounded-lg border-gray-200 p-3 text-sm"              
              type="text"
              id="confirmpassword"
            />
          </div>

          <input
                type="submit"
                value="Reset Password"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
        </form> : ""}
    </div>
  </div>
</section>
      <Footer />
    </div>
  )
}

export default ForgotPassword
