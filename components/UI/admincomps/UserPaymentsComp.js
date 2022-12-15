import React, { useEffect, useState } from "react";
import InfoCards from "./InfoCards";

function UserPaymentsComp() {
  const [InProgress, setInProgress] = useState(0);
  const [Approved, setApproved] = useState(0);
  const [Rejected, setRejected] = useState(0);

  useEffect(() => {
    const onLoad = async () => {
      const res = await fetch(`http://gohelpme.online/api/admin/user-status`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();
      console.log(response);
      setInProgress(
        response.usersVerificaitonStatus[0].InProgress.length < 1
          ? 0
          : response.usersVerificaitonStatus[0].InProgress[0]?.count
      );
      setApproved(
        response.usersVerificaitonStatus[0].Approved.length < 1
          ? 0
          : response.usersVerificaitonStatus[0].Approved[0]?.count
      );
      setRejected(
        response.usersVerificaitonStatus[0].Rejected.length < 1
          ? 0
          : response.usersVerificaitonStatus[0].Rejected[0]?.count
      );
    };

    onLoad();
  }, []);

  return (
    <div>
      <h3 className="ml-3 mt-10 text-3xl font-bold bg">Users Payment:</h3>
      <div className="py-10 xl:gap-7 xl:flex xl:flex-row flex flex-col gap-10 ml-3 bg-cya">
        <InfoCards
          key="4"
          category="Verification Status"
          value={Approved}
          progress="Approved"
          progressName="Approved"
        />
        <InfoCards
          key="5"
          category="Verification Status"
          value={InProgress}
          progress="InProgress"
          progressName="InProgress"
        />
        <InfoCards
          key="6"
          category="Verification Status"
          value={Rejected}
          progress="Rejected"
          progressName="Rejected"
        />
      </div>
    </div>
  );
}

export default UserPaymentsComp;
