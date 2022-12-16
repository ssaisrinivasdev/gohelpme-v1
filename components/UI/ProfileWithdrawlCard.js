import React from "react";

function ProfileWithdrawlCard(props) {
  return (
    <div>
      <div class="w-[280px] sm:w-[350px] md:w-[600px] lg:w-[800px] xl:w-[1000px]">
        <div class="flex flex-col xl:gap-28 xl:flex-row p-5 rounded-lg shadow bg-white">
          <div class="ml-3 flex flex-col xl:flex-row xl:gap-20">
            <h2 class="font-semibold text-3xl py-3 text-gray-800 ">
              {props.fundtitle}
            </h2>
            <p class="text-md text-gray-600 leading-relaxed flex flex-col">
              <span>Goal: {props.goal}$</span>
              <span>Amount Received: {props.amt}$</span>
              <span>Withdrawn: {props.withdrawn}$</span>
            </p>
          </div>

          <div class="flex items-center mt-3">
            {/* <button class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
              Cancel
            </button> */}

            <button class="flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWithdrawlCard;
