import React from "react";

function ProgressBar(props) {
  return (
    <div className="w-[276px]">
      <div className=" pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-color1">
              19000$ Raised of {props.amount}$
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semi  bold inline-block text-color1">
              30%
            </span>
          </div>
        </div>
        <div className="overflow-hidden my-3 grow-1 h-2 text-xs flex rounded bg-red-300 w-[276px]">
          <div
            style={{ width: "30%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-color1"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
