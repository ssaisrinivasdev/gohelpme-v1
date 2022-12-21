import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Funds from "../../Table";
import FormDialog from "../../TableButtonsPopup";
import ApprovalButton from "../../ButtonForTable";
import CreateBlog from "../CreateBlog";
import ExpandFieldForTable from "../../ExpandFieldForTable";
import CreateBlogDialog from "../../CreateBlogDialog";

function BlogEditorial() {
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
      field: "title",
      headerName: "Title",
      width: 220,
      minWidth: 220,
      maxWidth: 300,
    },
    {
      field: "long_description",
      headerName: "Description",
      type: "string",
      width: 200,
      minWidth:200,
      maxWidth: 200,
      renderCell: (params) => (
        <ExpandFieldForTable param={params.row.long_description}/>
      )
    },
    {
      field: "createdAt",
      headerName: "Join Date",
      width: 150,
      type: "datetime",
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
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
      `http://gohelpme.online/api/admin/blogs`,
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
      response.blogs[0].Result?.length < 1 ? 0 : response.blogs[0].Result
    );
    // if (res.status <= 299) {
    //   setisLoaded(true);
    // }
  };

  return (
    <div>
      {/* <CreateBlog /> */}
      <h3 className="ml-3 mt-2 text-3xl font-bold">Blog:</h3>
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
              className=" text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            >
              <option value="All">All</option>
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>

          <div className=" mr-10">
          <input
            {...register("keyword")}
            type="text"
            placeholder="Search Blogs.."
          />
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
      
      <div className="flex justify-end pr-20">
        <CreateBlogDialog/>
      </div>
      

      <Funds rows={rows} columns={columns}/>
    </div>
    </div>
  );
}

export default BlogEditorial;
