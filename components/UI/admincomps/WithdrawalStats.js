import React, { useEffect, useState } from "react";
import InfoCards from "./InfoCards";

function WithdrawalStats() {
  const [InProgress, setInProgress] = useState(0);
  const [Approved, setApproved] = useState(0);
  const [Rejected, setRejected] = useState(0);

  useEffect(() => {
    const onLoad = async () => {
      const res = await fetch(
        `http://gohelpme.online/api/admin/withdrawl-status`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await res.json();
      console.log(response);
      setInProgress(
        response.withdrawlRequests[0].InProgress.length < 1
          ? 0
          : response.withdrawlRequests[0].InProgress[0]?.count
      );
      setApproved(
        response.withdrawlRequests[0].Approved.length < 1
          ? 0
          : response.withdrawlRequests[0].Approved[0]?.count
      );
      setRejected(
        response.withdrawlRequests[0].Rejected.length < 1
          ? 0
          : response.withdrawlRequests[0].Rejected[0]?.count
      );
    };

    onLoad();
  }, []);

  return (
    <div>
      <h3 className="ml-10 mt-10 text-4xl font-bold bg">Withdrawals</h3>
      <div className="py-10 xl:gap-7 xl:flex xl:flex-row flex flex-col gap-10 mx-11 bg-cya">
        <InfoCards
          key="4"
          category="Withdrawal Status"
          value={Approved}
          progress="Approved"
        />
        <InfoCards
          key="5"
          category="Withdrawal Status"
          value={InProgress}
          progress="InProgress"
        />
        <InfoCards
          key="6"
          category="Withdrawal Status"
          value={Rejected}
          progress="Rejected"
        />
      </div>
    </div>
  );
}

export default WithdrawalStats;
