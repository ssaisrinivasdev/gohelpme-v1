import React, { useContext, useState } from 'react'
import Footer from '../components/UI/Footer'
import Header from '../components/UI/Header'
import { useRouter } from "next/router";
import GlobalContext from "../store/global-context";

function Verification() {
const globalData = useContext(GlobalContext)
  const router = useRouter()
const [otp, setOtp] = useState("");

const verify = async (event) => {
  event.preventDefault();
  console.log(otp)
  console.log(globalData.email)
  const email = globalData.email
  const verification_code = otp

  //TODO: create email text box
  const regisBundle = {verification_code, email}


  let result = await fetch("http://gohelpme.online/api/verify", {
      method: "POST",
      body: JSON.stringify(regisBundle),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })

    const error = await result.json();
    console.log(error.error)
    console.log(result.status)

    if(200 <= result.status < 300) { 
      globalData[1].setIsLoggedIn(true)
        router.push("/dashboard") 
      

}
}

  return (
    <div>
    <Header />
    <div className=' my-44'>
      <section class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg  md:flex-row md:h-48">
    <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-color1 ">
        <div class="px-6 py-6 md:px-8 md:py-0">
            <h2 class="text-lg font-bold text-gray-700  md:text-gray-100">Verify your Email</h2>

            
        </div>
    </div>

    <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
            <div class="flex flex-col p-1.5 overflow-hidden border rounded-lg  lg:flex-row  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none   focus:placeholder-transparent " type="text" name="email" placeholder="Enter the otp" value={otp} onChange={(e) => {setOtp(e.target.value)}} />

                <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none" type='button' onClick={verify}>submit</button>
            </div>
        </form>
    </div>
</section>
</div>
<Footer />
    </div>
  )
}

export default Verification