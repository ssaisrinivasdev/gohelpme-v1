import { useRouter } from "next/router";

import { useEffect } from "react";

import React from "react";

function Success() {
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    const { success } = router.query;

    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/successpayment/",
        {
          method: "PUT",
          body: JSON.stringify({ id: success.toString() }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
        []
      );

      if (result.status >= 200 && result.status <= 299) {
        const jsonresultData = await result.json();
        const timeout = setTimeout(() => {
          router.push("/fundraisers/" + jsonresultData.donationLog.fund_id);
        }, 5000);
        return () => clearTimeout(timeout);
      }
    };

    sync();
    
  },[router.isReady])

  // console.log(router.query)

  return (
    <div>
      <h1>Payment Successful. Redirecting in 5 seconds </h1>
    </div>
  );
}

export default Success;
