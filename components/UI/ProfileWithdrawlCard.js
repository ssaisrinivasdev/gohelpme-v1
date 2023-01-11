import React from "react";
import ScrollablePopup from "./scrollablePopup.js";

function ProfileWithdrawlCard(props) {

  async function handler(){
    props.loadingStatus(true)

    const res = await fetch(`http://gohelpme.online/api/withdrawl/create-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
      },
      body: JSON.stringify({
        fund_id: props.fundId,
        withdrawl_amount: props.RemainingAmt,
        current_amount: props.currentValue
      })
    });

    const response = await res.json();
    if(res.status >= 200 && res.status<=205){
      props.loadingStatus(false);
    }else if(res.status == 400){
      alert(response?.error?.toString())
      props.loadingStatus(false)
    }else{
      alert("Something went wrong")
      props.loadingStatus(false)
    }
  }

  return (
    <div>
      <div class="w-12/12 xl:justify-items-end p-2">
        <div class="w-12/12 flex flex-col xl:gap-28 xl:flex-row p-5 rounded-lg shadow bg-white">
          <div class="ml-3 flex flex-col xl:flex-row xl:gap-10 w-10/12">
            <h2 class="font-semibold text-3xl py-3 text-gray-800 w-8/12">
              {props.fundtitle}
            </h2>
            <p class="text-md text-gray-600 leading-relaxed flex flex-col xl:w-4/12">
              <span><b>Goal: $</b><i>{props.goal}</i></span>
              <span><b>Total Donations Received: $</b><i>{props.amt}</i></span>
              <span><b>Available Balance: $</b><i>{props.RemainingAmt}</i></span>
              <span><b>InProgress Amount: $</b><i>{props.InProgressAmount}</i></span>
              <span><b>Withdrawn Amount: $</b><i>{props.withdrawnAmount}</i></span>
            </p>
          </div>

          <div class="flex items-center mt-3 xl:w-1/12">
            {/* <input class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" /> */}

            <button
              onClick={()=>{handler()}}
              type="button"
              class="flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
            >
              Withdraw
            </button>
          </div>
          <div class="flex items-center mt-3 xl:w-1/12">
            {/* <input class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" /> */}
            <ScrollablePopup fundId={props.fundId}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWithdrawlCard;
