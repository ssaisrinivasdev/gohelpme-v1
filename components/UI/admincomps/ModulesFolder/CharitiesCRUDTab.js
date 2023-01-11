import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Funds from "../../Table";
import FormDialog from "../../TableButtonsPopup";
import ApprovalButton from "../../ButtonForTable";
import CircularProgressBar from "../../circularProgressBar";
import ExpandFieldForTable from "../../ExpandFieldForTable";
import CreateCharityDialog from "../../CreateCharityDialog";

function ChartitiesCRUDTab() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [rows, setRows] = useState(null);
  // const [tableData, setTableData] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const columns = [
    {
      field: "image",
      headerName: "Icon",
      width: 60,
      minWidth: 60,
      maxWidth: 60,
      renderCell: (params) => (
        <>
            <Image
            className="object-cover object-center w-10 h-10"
            src={
            params.row.image != null
                ? params.row.image 
                : "/images/patient.jpg"
            }
            alt="avatar"
            width={50}
            height={50}
      />
        </>
      ),
    },
    {
      field: "name",
      headerName: "Title",
      width: 130,
      minWidth: 130,
      maxWidth: 130,
    },
    {
        field: "description",
        headerName: "Description",
        type: "actions",
        width: 300,
        minWidth:300,
        maxWidth: 300,
        renderCell: (params) => (
          <ExpandFieldForTable param={params.row.description} value={35}/>
        )
    },
    {
      field: "paypalAddress",
      headerName: "PaypalAddress",
      width: 200,
      type: "actions",
      minWidth: 200,
      maxWidth: 200,
      renderCell: (params) => (
        <>
        <a>{(params.row.paypalAddress).substring(0,20)+"..."}</a>
        <ApprovalButton
          value="LinkCol"
          link={params.row.paypalAddress}
        />
        </>
      )
    },
    {
      field: "contact_name",
      headerName: "Contact",
      type: "string",
      width: 140,
      minWidth: 140,
      maxWidth: 200,
    },
    {
      field: "contact_email",
      headerName: "Contact-Email",
      type: "string",
      width: 160,
      minWidth: 160,
      maxWidth: 200,
    },
    {
      field: "website",
      headerName: "Website",
      type: "actions",
      width: 200,
      minWidth: 200,
      maxWidth: 200,
      renderCell: (params) => (
        <>
        <a>{params.row.website}</a>
        <ApprovalButton
          value="LinkCol"
          link={params.row.website}
        />
        </>
      ),
    },
  ];

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async (data) => {
    const res = await fetch(
      `http://gohelpme.online/api/admin/charities-list`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    const response = await res.json();

    // setTableData(response);

    // console.log(response);
    setRows(
      response.charitiesList[0].Result?.length < 1 ? 0 : response.charitiesList[0].Result
    );
    // if (res.status <= 299) {
    //   setisLoaded(true);
    // }
  };

  return (
    <div>
    <h3 className="ml-3 mt-2 text-3xl font-bold">Charities:</h3>
    <div className="flex flex-col gap-5 w-full">
      <form
        onSubmit={handleSubmit(onLoad)}
        className="flex flex-col xl:flex-row pt-10 gap-5"
      >
        <div className="w-80 ">
          <input
            type="submit"
            value="Refresh"
            className="group flex items-center justify-between border border-red-600 bg-red-600 px-2 py-2 transition-colors hover:bg-transparent hover:text-color1 focus:outline-none focus:ring text-white"
          />
        </div>
      </form>
      <div className="flex justify-end pr-20">
        <CreateCharityDialog/>
      </div>

      <Funds rows={rows} columns={columns}/>
    </div>
    </div>
  );
}

export default ChartitiesCRUDTab;
