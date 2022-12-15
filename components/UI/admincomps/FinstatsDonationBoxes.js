import React, { useEffect, useState } from "react";
import InfoCards from "./InfoCards";

function FinStatsBoxes() {
  const [count, setcount] = useState(0);
  const [amount, setamount] = useState(0);

  useEffect(() => {
    const onLoad = async () => {
      const res = await fetch(
        `http://gohelpme.online/api/admin/finance/donations`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await res.json();
      console.log(response);
      setcount(
        response.donationsReceived[0].InProgress.length < 1
          ? 0
          : response.donationsReceived[0].InProgress[0]?.count
      );
      setamount(
        response.donationsReceived[0].InProgress.length < 1
          ? 0
          : response.donationsReceived[0].InProgress[0]?.amount
      );
    };

    onLoad();
  }, []);

  return (
    <div>
      <h3 className="ml-3 mt-10 text-3xl font-bold bg">Donations</h3>
      <div className="py-10 xl:gap-7 xl:flex xl:flex-row flex flex-col gap-10 ml-3 bg-cya">
        <InfoCards
          key="4"
          category="Count"
          value={count}
          progress="InProgress"
          progressName="Total Count"
        />
        <InfoCards
          key="5"
          category="Amount"
          value={amount}
          progress="Rejected"
          progressName="Total Amount"
        />
      </div>
    </div>
  );
}

export default FinStatsBoxes;
