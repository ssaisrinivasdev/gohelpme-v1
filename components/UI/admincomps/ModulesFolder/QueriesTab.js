import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Funds from "../../Table";
import FormDialog from "../../TableButtonsPopup";
import ApprovalButton from "../../ButtonForTable";
import CreateBlog from "../CreateBlog";
import ExpandFieldForTable from "../../ExpandFieldForTable";

function QueriesTab() {
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
      field: "_id",
      headerName: "ID",
      width: 220,
      minWidth: 220,
      maxWidth: 300,
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
      minWidth: 160,
      maxWidth: 200,
    },
    {
      field: "message",
      headerName: "Message",
      type: "string",
      width: 200,
      minWidth:200,
      maxWidth: 200,
      renderCell: (params) => (
        <ExpandFieldForTable param={params.row.message}/>
      )
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 150,
      type: "datetime",
    },
    {
        field: "_status",
        headerName: "Status",
        type: "actions",
        renderCell: (params) => (
          <ApprovalButton
            value={params.row.ticket_status+"Query"}
          />
        ),
      }
  ];

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async (data) => {
    const res = await fetch(
      `http://gohelpme.online/api/admin/queries-list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          fromDate: startDate,
          toDate: endDate,
        }),
      }
    );

    const response = await res.json();

    // setTableData(response);

    // console.log(response);
    setRows(
      response.queryReq[0].Result?.length < 1 ? 0 : response.queryReq[0].Result
    );
    // if (res.status <= 299) {
    //   setisLoaded(true);
    // }
  };

  return (
    <div>
      {/* <CreateBlog /> */}
      <div className="flex flex-col gap-5">
      <form
        onSubmit={handleSubmit(onLoad)}
        className="flex flex-col xl:flex-row pt-10 gap-5"
      >
        <h2 className="ml-3 py-1 text-xl text-gray-600">From:</h2>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <h2 className="ml-3 py-1 text-xl text-gray-600">To:</h2>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>

        <div className="flex flex-col xl:flex-row gap-5">
          <h2 className="ml-3 py-1 text-xl text-gray-600">Status:</h2>
          <div className="mr-10">
            <select
              {...register("ticket_status")}
              className=" text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            >
              <option value="Opened">Opened</option>
              <option value="Investigating">Investigating</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="w-80 ">
          <input
            type="submit"
            value="Search"
            className="group flex items-center justify-between border border-red-600 bg-red-600 px-2 py-2 transition-colors hover:bg-transparent hover:text-color1 focus:outline-none focus:ring text-white pointer"
          />
        </div>
      </form>
    
      <Funds rows={rows} columns={columns}/>
    </div>
    </div>
  );
}

export default QueriesTab;
