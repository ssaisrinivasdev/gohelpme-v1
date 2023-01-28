import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Funds from "../../Table";
import FormDialog from "../../TableButtonsPopup";
import ApprovalButton from "../../ButtonForTable";

function WithdrawalRequestsTab() {
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
      field: "_id",
      headerName: "ID",
      width: 220,
      minWidth: 220,
      maxWidth: 300,
    },
    {
      field: "withdrawl_status",
      headerName: "Status",
      width: 150,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "withdrawl_amount",
      headerName: "Amount Requested",
      type: "number",
      width: 160,
      minWidth: 160,
      maxWidth: 160,
    },
    {
      field: "createdAt",
      headerName: "Requested Date",
      width: 200,
      type: "datetime",
    },
    {
      field: "approvals",
      headerName: "Approvals",
      type: "actions",
      width: 200,
      renderCell: (params) => (
        // console.log(params)
        <FormDialog id={params.id} status="withdrawalVerificationStatus" statusValue={params.row.withdrawl_status}/>
      ),
    },
    {
      field: "link",
      headerName: "Fund Link",
      type: "actions",
      renderCell: (params) => (
        <ApprovalButton
          value="LinkCol"
          link={"http://gohelpme.online/fundraisers/" + params.row.fund}
        />
      ),
    },
    {
      field: "payments",
      headerName: "Payments",
      type: "actions",
      width: 140,
      renderCell: (params) => (
        <FormDialog id={params.row.fund} status="CharitiesFundWithdrawalPayment" statusValue="Payment"/>
      ),
    }
  ];

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async (data) => {
    const res = await fetch(
      `http://gohelpme.online/api/admin/withdrawl-approvals-list`,
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
      response.wdReq[0].Result?.length < 1 ? 0 : response.wdReq[0].Result
    );
    // if (res.status <= 299) {
    //   setisLoaded(true);
    // }
  };

  return (
    <div><h3 className="ml-3 mt-2 text-3xl font-bold">Withdrawal Requests:</h3>
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
              {...register("status")}
              // onChange={handleSubmit(handler)}
              // onChange={(e) => {
              //   // handler(e);
              //   setRendered(e.target.value);
              // }}
              className=" text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            >
              <option value="Requested">Requested</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

        </div>

        <div className="w-80 ">
          <input
            type="submit"
            value="Search"
            className="group flex items-center justify-between border border-red-600 bg-red-600 px-2 py-2 transition-colors hover:bg-transparent hover:text-color1 focus:outline-none focus:ring text-white"
          />
        </div>
      </form>

      <Funds rows={rows} columns={columns}/>
    </div>
    </div>
  );
}

export default WithdrawalRequestsTab;
