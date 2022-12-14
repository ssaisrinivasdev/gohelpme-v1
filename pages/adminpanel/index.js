import React from "react";
import AdminUi from "../../components/UI/admincomps/ModulesFolder/AdminUi";
import Sidebar from "../../components/UI/admincomps/Sidebar";
import { useState } from "react";
import BlogEditorial from "../../components/UI/admincomps/ModulesFolder/BlogEditorial";
import FInStats from "../../components/UI/admincomps/ModulesFolder/FInStats";

function Admin() {
  const [buttonActive, setButtonActive] = useState("dashboard");

  const handler = (data) => {
    console.log(data);
    setButtonActive(data);
  };

  return (
    <div className="flex gap-5">
      <Sidebar segmentActive={handler} />

      <div className="flex flex-col gap-5">
        {buttonActive === "dashboard" ? <AdminUi /> : ""}
        {buttonActive === "blog" ? <BlogEditorial /> : ""}
        {buttonActive === "finstats" ? <FInStats /> : ""}
        {buttonActive === "fundApproval" ? <FInStats /> : ""}
        {buttonActive === "withdrawalRequests" ? <BlogEditorial /> : ""}
        {buttonActive === "queries" ? <BlogEditorial /> : ""}
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
