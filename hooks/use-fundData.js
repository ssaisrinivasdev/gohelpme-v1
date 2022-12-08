import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useLoginCheck from "./use-logincheck";

function useFundData() {
  const { decodedId } = useLoginCheck();
  const router = useRouter();
  const [fundData, setFundData] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    const { fundraiser } = router.query;
    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/fund/" + fundraiser,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await result.json();
      setFundData(data);
    };

    sync();
    console.log(fundData?.fund?.owner);
    console.log(`decodedId: ${decodedId}`);
  }, [router.isReady, decodedId]);

  return fundData;
}

export default useFundData;
