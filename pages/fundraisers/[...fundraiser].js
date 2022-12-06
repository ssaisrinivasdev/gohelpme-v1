import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../components/UI/Footer'
import FundUpdateForm from '../../components/UI/FundUpdateForm'
import Header from '../../components/UI/Header'

function UpdateFund() {



  const router = useRouter();
  const [fund, setFund] = useState(null)
  


  useEffect(() => {
    if(!router.isReady) return;
    const { fundraiser } = router.query;
    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/fund/" + fundraiser[0],
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      
      );

      const data = await result.json()
      setFund(data)
      
    };

    sync();

  },[router.isReady])


  return (
    <div>
      <Header />
      <FundUpdateForm fund={fund}/>
      <Footer />
    </div>
  )
}

export default UpdateFund