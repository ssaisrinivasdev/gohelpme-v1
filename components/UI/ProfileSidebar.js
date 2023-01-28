import React from "react";
import { useState } from "react";

import Link from "next/link";

function ProfileSidebar({ segmentActive }) {
  
  const [activeOne, setActiveOne] = useState("details");

  const handler = (data) => {
    setActiveOne(data.param);
    segmentActive(data.param);
  };

  return (
    <div className=" ml-5 flex h-48 w-16 flex-col justify-between border-r bg-white sticky top-0 z-10">
      <div>
        <div className="border-t border-gray-100">
          <nav aria-label="Main Nav" className="flex flex-col p-2">
            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li
                
              >
                <div
                  className={
                    activeOne == "details"
                      ? "t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700 hover:text-gray-700"
                      : "t group relative flex justify-center rounded px-2 py-1.5 text-blue-700 hover:bg-gray-50 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke={activeOne == "details" ? "blue" : "gray"}
                    class="h-10 w-10 opacity-75"
                    onClick={() => {
                      handler({ param: "details" });
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Details
                  </span>
                </div>
              </li>

              <li
                
              >
                <div
                  className={
                    activeOne == "payments"
                      ? "t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700 hover:text-gray-700"
                      : "t group relative flex justify-center rounded px-2 py-1.5 text-blue-700 hover:bg-gray-50 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "payments" ? "blue" : "gray"}
                    className="h-10 w-10 opacity-75"
                    onClick={() => {
                      handler({ param: "payments" });
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Payments
                  </span>
                </div>
              </li>

              <li
                
              >
                <div
                  className={
                    activeOne == "withdrawal"
                      ? "t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700 hover:text-gray-700"
                      : "t group relative flex justify-center rounded px-2 py-1.5 text-blue-700 hover:bg-gray-50 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "withdrawal" ? "blue" : "gray"}
                    className="w-10 h-10 opacity-75"
                    onClick={() => {
                      handler({ param: "withdrawal" });
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    withdrawal
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
