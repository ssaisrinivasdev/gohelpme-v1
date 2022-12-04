import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';

function ImageSlider({image, id, status}) {

  const [followStatus, setFollowStatus] = useState(status)

  const router = useRouter()


const handler = async () => {
if(status == "not_loggedin") {
  
  router.push("/login")
} else {
  console.log("else")
  const res = await fetch("http://gohelpme.online/api/followfund/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json()

  if (res.status >= 200 && res.status <= 205) {
    if(response.status == "Post Followed") {
      setFollowStatus("following")
    } else if (response.status == "Post Unfollowed") {
      setFollowStatus("not_following")
    }
  }
}
   
}


 
  return (
    <div className='relative'>

{ followStatus === "not_loggedin" ?  <div className='absolute top-7 right-3 cursor-pointer' onClick={handler}>
            <span className="text-sm  inline-block py-1 px-2 uppercase rounded-full bg-slate-100 hover:text-white hover:bg-color1 mx-auto font-medium transition-colors text-red-600 active:text-red-500">
              Follow +
            </span>
          </div> : "" }
    
    { followStatus === "not_following" ?  <div className='absolute top-7 right-3 cursor-pointer' onClick={handler}>
            <span className="text-sm  inline-block py-1 px-2 uppercase rounded-full bg-slate-100 hover:text-white hover:bg-color1 mx-auto font-medium transition-colors text-red-600 active:text-red-500">
              Follow +
            </span>
          </div> : "" }

     {followStatus === "following" ? <div className='absolute top-7 right-3 cursor-pointer' onClick={handler}>
            <span className="text-sm  inline-block py-1 px-2 uppercase rounded-full text-white bg-color1 mx-auto font-medium transition-colors ">
              Following
            </span>
          </div> : ""}
     


    <div class="flex overflow-scroll scrollbar-hide gap-4 md:grid-cols-1 lg:mt-4">
        <img
          alt="Image1"
          src={`${image[0]}`}
          class="aspect-square w-full rounded-xl object-cover"
        />

          <img
            alt="Image2"
            src={`${image[1]}`}
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Image3"
            src={`${image[2]}`}
            class="aspect-square w-full rounded-xl object-cover"
          />
      </div>
      </div>
  )
}

export default ImageSlider