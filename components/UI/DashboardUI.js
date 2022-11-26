import React, { useState } from 'react'
import CategoryFunds from './CategoryFunds'
import Footer from './Footer'
import Header from './Header'
import InfoButtons from './InfoButtons'
import Profile from './Profile'
import ProfileCards from './ProfileCards'

function DashboardUi() {

  const [buttonActive, setButtonActive] = useState("profile")

console.log(buttonActive)
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

export default DashboardUi