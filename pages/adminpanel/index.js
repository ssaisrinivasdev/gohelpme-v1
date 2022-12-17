import React from "react";
import AdminUi from "../../components/UI/admincomps/ModulesFolder/AdminUi";
import Sidebar from "../../components/UI/admincomps/Sidebar";
import { useState } from "react";
import BlogEditorial from "../../components/UI/admincomps/ModulesFolder/BlogEditorial";
import FInStats from "../../components/UI/admincomps/ModulesFolder/FInStats";
import FundApproval from "../../components/UI/admincomps/ModulesFolder/FundApproval";
import WithdrawalRequestsTab from "../../components/UI/admincomps/ModulesFolder/WithdrawalRequestsTab"
import QueriesTab from "../../components/UI/admincomps/ModulesFolder/QueriesTab";

function Admin() {
  const [buttonActive, setButtonActive] = useState("dashboard");

  const handler = (data) => {
    console.log(data);
    setButtonActive(data);
  };

  return (
    <div className="flex overflow-hidden gap-20 lg:gap-28">
      <div className="relative">
        <div className="fixed top-0 left-0 z-10">
          <Sidebar segmentActive={handler} />
        </div>
      </div>

      <div className="flex flex-col">
        {buttonActive === "dashboard" ? <AdminUi /> : ""}
        {buttonActive === "blog" ? <BlogEditorial /> : ""}
        {buttonActive === "finstats" ? <FInStats /> : ""}
        {buttonActive === "fundApproval" ? (
          <div className="flex flex-col">
            <FundApproval />
          </div>
        ) : (
          ""
        )}
        {buttonActive === "withdrawalRequests" ? <WithdrawalRequestsTab /> : ""}
        {buttonActive === "queries" ? <QueriesTab /> : ""}
        {buttonActive === "roles" ? <BlogEditorial /> : ""}
      </div>
    </div>
  );

  {
    /* Dashboard */
  }

  {
    /* info cards */
  }

  {
    /* Fin stats */
  }

  {
    /* info cards */
  }

  {
    /* fund approval */
  }

  {
    /* approval request feed */
  }

  {
    /* withdraw reqs */
  }

  {
    /* withdrawl request feed */
  }

  {
    /* Blog */
  }

  {
    /* blog crud */
  }

  {
    /* queries */
  }

  {
    /* user query feeds */
  }

  {
    /* Roles */
  }

  {
    /* all roles */
  }
}

export default Admin;
