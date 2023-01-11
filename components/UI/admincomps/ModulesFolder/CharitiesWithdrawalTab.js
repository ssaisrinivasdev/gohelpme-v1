import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Funds from "../../Table";
import FormDialog from "../../TableButtonsPopup";
import ApprovalButton from "../../ButtonForTable";
import CircularProgressBar from "../../CircularProgressBar";

function ChartitiesWithdrawalTab() {
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
      field: "title",
      headerName: "Title",
      width: 220,
      minWidth: 220,
      maxWidth: 300,
    },
    {
      field: "goal",
      headerName: "Goal",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "currentValue",
      headerName: "currentValue",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "AmountWithdrawn",
      headerName: "Amount Withdrawn",
      type: "actions",
      width: 170,
      renderCell: (params) => (
        <>
          {params.row.withdrawnAmount}
        </>
      ),
    },
    {
      field: "Amount",
      headerName: "Withdrawable Amount",
      type: "actions",
      width: 170,
      renderCell: (params) => (
        <>
          {params.row.currentValue - params.row.withdrawnAmount}
        </>
      ),
    },
    {
      field: "percent",
      headerName: "Percent",
      type: "actions",
      width: 80,
      renderCell: (params) => (
        <CircularProgressBar value={params.row.percent} />
      ),
    },
    {
      field: "link",
      headerName: "Link",
      type: "actions",
      renderCell: (params) => (
        <ApprovalButton
          value="LinkCol"
          link={"http://gohelpme.online/fundraisers/" + params.id}
        />
      ),
    },
    {
      field: "approvals",
      headerName: "Approvals",
      type: "actions",
      width: 140,
      renderCell: (params) => (
        // console.log(params)
        <FormDialog id={params.id} status="CharitiesWithdrawalStatus" statusValue="InProgress"/>
      ),
    },
    // {
    //   field: "paypalAddress",
    //   headerName: "PaypalAddress",
    //   width: 200,
    //   type: "actions",
    //   minWidth: 200,
    //   maxWidth: 200,
    //   renderCell: (params) => (
    //     <>
    //     <a>{(params.row.paypalAddress).substring(0,20)+"..."}</a>
    //     <ApprovalButton
    //       value="LinkCol"
    //       link={params.row.paypalAddress}
    //     />
    //     </>
    //   )
    // },
  ];

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async (data) => {
    const res = await fetch(
      `http://gohelpme.online/api/admin/charities-funds-list`,
      {
        method: "PUT",
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
      response.fundCharityReq[0].Result?.length < 1 ? 0 : response.fundCharityReq[0].Result
    );
    // if (res.status <= 299) {
    //   setisLoaded(true);
    // }
  };

  return (
    <div>
    <h3 className="ml-3 mt-2 text-3xl font-bold">Charities Withdrawals:</h3>
    <div className="flex flex-col gap-5 w-full">
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

export default ChartitiesWithdrawalTab;
