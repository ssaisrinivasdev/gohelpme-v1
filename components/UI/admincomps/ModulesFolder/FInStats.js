import React from "react";
import Stats from "../Stats";
import Funds from "../../Table";

function FInStats() {
  return (
    <div>
      <h3 className="ml-3 my-10 text-3xl font-bold bg">Manage Users</h3>
      <div className="max-lg:overflow-x-scroll max-lg:w-[330px]">
        {/* <Stats /> */}
        <Funds />
      </div>
    </div>
  );
}

export default FInStats;
