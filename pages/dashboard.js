import React, { useState, useContext, useEffect } from 'react'
import CategoryFunds from '../components/UI/CategoryFunds'
import Footer from '../components/UI/Footer'
import Header from '../components/UI/Header'
import InfoButtons from '../components/UI/InfoButtons'
import Profile from '../components/UI/Profile'
import ProfileCards from '../components/UI/ProfileCards'
import GlobalContext from '../store/global-context'
import Router, { useRouter } from 'next/router'
import jwt  from 'jsonwebtoken'

function Dashboard() {



const [buttonActive, setButtonActive] = useState("profile")
const globalData = useContext(GlobalContext)
const router = useRouter()

useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem('token');
  
    if(token)
    {
      jwt.verify(token, '$tr0ngkEy123!@#', function(err, decoded) {
        if (err) {
            console.log("not logged in")
            globalData[1].setIsLoggedIn(false) 
            router.push("/login")
        }else{
          globalData[1].setIsLoggedIn(true)
      



  return (
    <div>
<Header />
<div className='mx-10 xl:mx-80 align-middle text-left py-10'>
<div class="inline-flex">
    <button onClick={() => {setButtonActive("profile")}} class="flex items-center h-12 px-8 py-2 text-sm text-center text-gray-700 border border-b-0 border-gray-300 sm:text-base  rounded-t-md  whitespace-nowrap focus:outline-none">
        Profile
    </button>

    <button onClick={() => {setButtonActive("info")}} class="flex items-center h-12 px-8 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
        Info
    </button>

    <button onClick={() => {setButtonActive("funds")}} class="flex items-center h-12 px-8 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
        Funds
    </button>
</div>

{buttonActive === "profile" ? <div><Profile />
<div className=' md:flex'><ProfileCards title="Address" /> <ProfileCards title="Details" /> <ProfileCards title="Help" /> </div></div> : ""}
{buttonActive === "info" ? <div><InfoButtons /></div> : ""}
{buttonActive === "funds" ? <div>
<CategoryFunds categoryTitle="Funds Following" />
 <CategoryFunds categoryTitle="Funds Created" /> 
 <CategoryFunds categoryTitle="Donations" /></div> : ""}

</div>




<Footer />
    </div>
  )

  }	
});
} else {
  router.push("/login")
}

}, [])

console.log(buttonActive)
}

export default Dashboard