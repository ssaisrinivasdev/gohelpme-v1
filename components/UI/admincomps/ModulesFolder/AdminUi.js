import React from "react";
import InfoCards from "../InfoCards";

import Stats from "./FinStats";
import { useForm } from "react-hook-form";
import { useState } from "react";

function AdminUi() {
  const [rendered, setRendered] = useState("InProgress");
  console.log(rendered);

  const handler = async () => {
    const res = await fetch(
      "http://gohelpme.online/api/admin/funds-status/All",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await res.json();
    console.log(response);
  };

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const searchNow = (data) => {
  //   setRendered(data.category);
  //   console.log(rendered);
  // };

  return (
    <div>
      <div className=" flex justify-between">
        <h3 class="ml-10 mt-10 text-4xl font-bold">Funds:</h3>
        <form className="">
          <div className="mt-10 mr-10">
            <select
              // {...register("category")}
              onChange={(e) => {
                handler();
                setRendered(e.target.value);
              }}
              className=" text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            >
              <option value="InProgress">InProgress</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </form>
      </div>
      <div className="py-10 xl:gap-7 xl:flex xl:flex-row flex flex-col gap-10 mx-11">
        <InfoCards
          key="1"
          category="All Categories"
          value="12"
          progress="Accepted"
        />
        <InfoCards
          key="2"
          category="All Categories"
          value="112"
          progress="InProgress"
        />
        <InfoCards
          key="3"
          category="All Categories"
          value="1121"
          progress="Rejected"
        />
      </div>
      <h3 class="ml-10 mt-10 text-4xl font-bold bg">Users Payment:</h3>
      <div className="py-10 xl:gap-7 xl:flex xl:flex-row flex flex-col gap-10 mx-11 bg-cya">
        <InfoCards
          key="4"
          category="Verification Status"
          value="12"
          progress="Accepted"
        />
        <InfoCards
          key="5"
          category="Verification Status"
          value="112"
          progress="InProgress"
        />
        <InfoCards
          key="6"
          category="Verification Status"
          value="1121"
          progress="Rejected"
        />
      </div>
      <div className="max-lg:overflow-x-scroll mx-11 max-lg:w-[330px]">
        <Stats />
      </div>
          
    </div>
  );
}

export default AdminUi;
