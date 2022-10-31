import React from "react";

function ProgressBar() {
  return (
    <div>
      <div className=" pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-color1 bg-white">
              19000$ Raised
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-pink-600">
              30%
            </span>
          </div>
        </div>
        <div className="overflow-hidden grow-0 h-2 mb-4 text-xs flex rounded bg-red-200">
          <div
            style={{ width: "30%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
