import React from 'react'
import GlobalContext from "../store/global-context";
import { useRouter } from 'next/router';
import { useContext } from 'react';

function dummytest() {
  const router = useRouter()
  const globalData = useContext(GlobalContext)

  if(globalData.isLoggedIn === false){
    return router.push("/verification")
  }



  return (
    <div>dummytest</div>
  )
}

export default dummytest