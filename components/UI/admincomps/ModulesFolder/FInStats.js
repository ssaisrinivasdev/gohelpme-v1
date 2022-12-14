import React from "react";
import Stats from "../Stats";
import Funds from "../../Table";

function FInStats() {
  return (
    <div>
      <div className="max-lg:overflow-x-scroll mx-11 max-lg:w-[330px]">
        {/* <Stats /> */}
        <Funds/>
      </div>
    </div>
  );
}

export default FInStats;
