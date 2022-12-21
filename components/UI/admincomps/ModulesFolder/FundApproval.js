import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Funds from "../../Table";
import FormDialog from "../../TableButtonsPopup";
import ApprovalButton from "../../ButtonForTable";

function FundApproval() {
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
      field: "fund_type",
      headerName: "Fund Type",
      width: 150,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "category",
      headerName: "Category",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
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
      field: "verification_status",
      headerName: "Status",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "createdAt",
      headerName: "Join Date",
      width: 100,
      type: "datetime",
    },
    {
      field: "approvals",
      headerName: "Approvals",
      type: "actions",
      width: 200,
      renderCell: (params) => (
        <FormDialog/>
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
  ];

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async (data) => {
    const res = await fetch(
      `http://gohelpme.online/api/admin/fund-approvals-list`,
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
      response.funds[0].Result?.length < 1 ? 0 : response.funds[0].Result
    );
    // if (res.status <= 299) {
    //   setisLoaded(true);
    // }
  };

  return (
    <div>
    <h3 className="ml-3 mt-2 text-3xl font-bold">Fund Approvals:</h3>
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
              <option value="InProgress">InProgress</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <h2 className="ml-3 py-1 text-xl text-gray-600">Category:</h2>
          <div className=" mr-10">
            <select
              {...register("category")}
              // onChange={handleSubmit(handler)}
              // onChange={(e) => {
              //   // handler(e);
              //   setRendered(e.target.value);
              // }}
              className=" text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            >
              <option value="All">All</option>
              <option value="Medical">Medical</option>
              <option value="Memorial">Memorial</option>
              <option value="Emergency">Emergency</option>
              <option value="NonProfit">NonProfit</option>
              <option value="Emergency">FinancialEmergency</option>
              <option value="Animals">Animals</option>
              <option value="Environment">Environment</option>
              <option value="Business">Business</option>
              <option value="Community">Community</option>
              <option value="Competition">Competition</option>
              <option value="Creative">Creative</option>
              <option value="Event">Event</option>
              <option value="Faith">Faith</option>
              <option value="Family">Family</option>
              <option value="Sports">Sports</option>
              <option value="Wishes">Wishes</option>
              <option value="Travel">Travel</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Others">Others</option>
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

export default FundApproval;
