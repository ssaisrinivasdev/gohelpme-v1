
import { useRouter } from 'next/router'

import { useEffect } from 'react'

import React from 'react'

function Success() {

  const router = useRouter()
  const { success } = router.query

  useEffect(() => {
    const sync = async () => {

      await fetch("http://gohelpme.online/api/successpayment/", {
        method: "PUT",
        body:JSON.stringify({"id": success.toString()}),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      },[])
  
    } 
  
    
  sync()
  });

  
    

  // console.log(router.query)

  return (
    <div><p>Query: {success}</p></div>
  )
}

export default Success