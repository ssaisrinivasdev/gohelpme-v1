import React from "react";
import Stats from "../Stats";
import Funds from "../../Table";
import FinStatsBoxes from "../FInStatsBoxes";
import FinStatsDonationBoxes from "../FinstatsDonationBoxes";
import CreateRoleDialog from "../../CreateRoleDialog";

function FInStats() {
  return (
    <div>
      <div className="overflow-scroll scrollbar-hide w-[330px] sm:w-[530px] md:w-[730px] lg:w-[930px] xl:w-[1400px] ">
        {/* <Stats /> */}
        <FinStatsBoxes />
        {/* <CreateRoleDialog/> */}
        <FinStatsDonationBoxes />
      </div>
    </div>
  );
}

export default FInStats;
