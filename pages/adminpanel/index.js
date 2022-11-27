import React from 'react'
import AdminUi from '../../components/UI/admincomps/ModulesFolder/AdminUi'
import Sidebar from '../../components/UI/admincomps/Sidebar'
import { useState } from 'react'

function Admin() {


    const [buttonActive, setButtonActive] = useState("profile")

    console.log(buttonActive)



  return (  
    <div className='flex gap-10'>
   
  <Sidebar />

  <AdminUi />


  {/* {buttonActive === "profile" ? <div><Profile /> */}
{/* <div className=' md:flex'><ProfileCards title="Address" /> <ProfileCards title="Details" /> <ProfileCards title="Help" /> </div></div> : ""}
{buttonActive === "info" ? <div><InfoButtons /></div> : ""} */}

  </div>



  )


{/* user info */}

{/* menu */}
 







{/* Dashboard */}

   {/* info cards */}

{/* Fin stats */}

    {/* info cards */}

{/* fund approval */}

    {/* approval request feed */}

{/* withdraw reqs */}

    {/* withdrawl request feed */}

{/* Blog */}

    {/* blog crud */}

{/* queries */}

    {/* user query feeds */}

{/* Roles */}

    {/* all roles */}


  
}

export default Admin