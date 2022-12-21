import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Funds from "../../Table";
import FormDialog from "../../TableButtonsPopup";
import ApprovalButton from "../../ButtonForTable";
import CreateBlog from "../CreateBlog";
import ExpandFieldForTable from "../../ExpandFieldForTable";
import CreateRoleDialog from "../../CreateRoleDialog";

function RolesTab() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [rows, setRows] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const columns = [
    {
      field: "email",
      headerName: "Email",
      width: 160,
      minWidth: 160,
      maxWidth: 200,
    },
    {
      field: "roles",
      headerName: "Roles",
      width: 160,
      minWidth: 160,
      maxWidth: 200,
    },
    {
      field: "admin_type",
      headerName: "Admin Type",
      width: 160,
      minWidth: 160,
      maxWidth: 200,
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 150,
      type: "datetime",
    },
    {
      field: "updatedAt",
      headerName: "Date",
      width: 150,
      type: "datetime",
    }
  ];

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async (data) => {
    const res = await fetch(
      `http://gohelpme.online/api/admin/roles-list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    const response = await res.json();

    // setTableData(response);

    // console.log(response);
    setRows(
      response.rolesList[0].Result?.length < 1 ? 0 : response.rolesList[0].Result
    );
    // if (res.status <= 299) {
    //   setisLoaded(true);
    // }
  };

  return (
    <div>
      <h3 className="ml-3 mt-2 text-3xl font-bold">Roles:</h3>
      <Funds rows={rows} columns={columns}/>
      <CreateRoleDialog/>
    </div>
  );
}

export default RolesTab;
