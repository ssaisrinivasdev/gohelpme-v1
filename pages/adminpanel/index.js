import React from "react";
import AdminUi from "../../components/UI/admincomps/ModulesFolder/AdminUi";
import Sidebar from "../../components/UI/admincomps/Sidebar";
import { useState } from "react";
import BlogEditorial from "../../components/UI/admincomps/ModulesFolder/BlogEditorial";
import FInStats from "../../components/UI/admincomps/ModulesFolder/FInStats";
import FundApproval from "../../components/UI/admincomps/ModulesFolder/FundApproval";
import WithdrawalRequestsTab from "../../components/UI/admincomps/ModulesFolder/WithdrawalRequestsTab";
import QueriesTab from "../../components/UI/admincomps/ModulesFolder/QueriesTab";
import RolesTab from "../../components/UI/admincomps/ModulesFolder/RolesTab";
import { useRouter } from "next/router";

function Admin() {
  const [buttonActive, setButtonActive] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState("");
  const [adminType, setAdminType] = useState("admin");
  const [email, setEmail] = useState("admin@admin.com");
  const router = useRouter();
  const [canRoute, setCanRoute] = useState(true);

  // useEffect(() => {
  //   getAdminDetails();
  // }, [buttonActive]);

  // async function getAdminDetails() {
  //   const token = localStorage.getItem("admin_token");
  //   let id = null;
  //   if (token) {
  //     jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
  //       if (!err) {
  //         id = decoded.id;
  //       }else{
  //         console.error("The below one is the error")
  //         console.error(err);
  //         setCanRoute(false);
  //       }
  //     });
  //   }else{
  //     console.error("Token not found");
  //     setCanRoute(false);
  //   }
  //   if(id != null){
  //     let result = await fetch("http://gohelpme.online/api/admin/details/" + id, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
  //         "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
  //       },
  //     });
  //     const response = await result.json();
  //     if(result.status >= 200 && result.status < 300){
  //       console.log(response)
  //       setAdminType(response.response.admin_type);
  //       setRoles(response.response.roles);
  //       setEmail(response.response.email);
  //       setIsLoading(false);
  //     }else if(result.status == 401){
  //       if (
  //         response.toString().includes("Invalid User") ||
  //         response.toString().includes("User not logged in ") ||
  //         response.toString().includes("User Not Found") ||
  //         response.toString().includes("Please Login to Access")
  //       ) {
  //         setCanRoute(false);
  //       }
  //     }
  //   }else{
  //     setCanRoute(false);
  //   }
  //   if(!canRoute){
  //     router.push("/adminpanel/login");
  //   }

  // }

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
        {buttonActive === "roles" ? <RolesTab /> : ""}
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
