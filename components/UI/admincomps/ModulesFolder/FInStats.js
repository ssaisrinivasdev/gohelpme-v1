import React from "react";
import Stats from "../Stats";
import Funds from "../../Table";
import FinStatsBoxes from "../FInStatsBoxes";
import FinStatsDonationBoxes from "../FinstatsDonationBoxes";

function FInStats() {
  return (
    <div>
      <h3 className="ml-3 my-10 text-3xl font-bold bg">Manage Requests</h3>
      <div className="overflow-scroll scrollbar-hide w-[330px] sm:w-[530px] md:w-[730px] lg:w-[930px] xl:w-[1400px] ">
        {/* <Stats /> */}
        <Funds />
        <FinStatsBoxes />
        <FinStatsDonationBoxes />
      </div>
    </div>
  );
}

export default FInStats;
