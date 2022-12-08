import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useLoginCheck from "./use-logincheck";

function useFundData() {
  const router = useRouter();
  let [fundData, setFundData] = useState(null);
  const { fundraiser } = router.query;

  // 3. Create out useEffect function
  const setter = useEffect(() => {
    if (!router.isReady) return;
    fetch("http://gohelpme.online/api/fund/" + fundraiser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setFundData(data));
  }, [router.isReady, fundData]);
  window.onload = setter;

  return fundData;
}

// function useFundData() {
//   // const { decodedId } = useLoginCheck();
//   const router = useRouter();
//   const [fundData, setFundData] = useState(null);

//   useEffect(() => {
//     if (!router.isReady) return;

//     sync();
//     const sync = async () => {
//       let result = await fetch(
//         "http://gohelpme.online/api/fund/" + fundraiser,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       );

//       const data = await result.json();

//     };
//   }, []);
//   console.log(data);
//   setFundData(data);

//   console.log(fundData?.fund?.owner);
//   console.log(`decodedId: ${decodedId}`);

//   return fundData;
// }

export default useFundData;
