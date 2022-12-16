import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function FundApproval() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log(`startdate: ${startDate}`);
  console.log(`enddate: ${endDate}`);

  return (
    <div className="flex pt-10 gap-5">
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>

      <div className="w-40 ">
        <button className="group flex items-center justify-between border border-red-600 bg-red-600 px-2 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring">
          <span className="mx-auto font-medium text-white transition-colors group-hover:text-red-600 group-active:text-red-500">
            <span>Search</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default FundApproval;
