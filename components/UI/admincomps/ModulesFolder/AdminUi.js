import React, { useEffect } from "react";
import InfoCards from "../InfoCards";

import Stats from "./FInStats";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FundsComp from "../FundsComp";
import UserPaymentsComp from "../UserPaymentsComp";
import WithdrawalStats from "../WithdrawalStats";

function AdminUi() {
  useEffect(() => {
    const handler = async (e) => {
      let api = "http://gohelpme.online/api/admin/user-status";

      const res = await fetch(api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();

      // setInProgress(
      //   response.funds[0].InProgress.length < 1
      //     ? 0
      //     : response.funds[0].InProgress[0]?.count
      // );
      // setApproved(
      //   response.funds[0].Approved.length < 1
      //     ? 0
      //     : response.funds[0].Approved[0]?.count
      // );
      // setRejected(
      //   response.funds[0].Rejected.length < 1
      //     ? 0
      //     : response.funds[0].Rejected[0]?.count
      // );
    };

    handler();
  }, []);

  return (
    <div className="">
      <FundsComp />
      <UserPaymentsComp />
      <WithdrawalStats />
    </div>
  );
}

export default AdminUi;
