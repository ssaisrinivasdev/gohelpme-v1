import React from "react";
import { useState } from "react";

import Link from "next/link";

function Sidebar({ segmentActive }) {
  // const [buttonActive, setButtonActive] = useState("dashboard");

  const [activeOne, setActiveOne] = useState("dashboard");

  const handler = (data) => {
    setActiveOne(data.param);
    segmentActive(data.param);
  };

  return (
    <div className="flex h-screen w-16 flex-col justify-between border-r bg-white sticky top-0">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span className="block h-10 w-10 rounded-lg bg-gray-200"></span>
        </div>

        <div className="border-t border-gray-100">
          <nav aria-label="Main Nav" className="flex flex-col p-2">
            <div className="py-4">
              <div
                className={
                  activeOne == "dashboard"
                    ? "t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700 hover:text-gray-700"
                    : "t group relative flex justify-center rounded px-2 py-1.5 text-blue-700 hover:bg-gray-50 hover:text-gray-700"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 opacity-75 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={activeOne == "dashboard" ? "blue" : "gray"}
                  strokeWidth="2"
                  onClick={() => {
                    handler({ param: "dashboard" });
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                  Dashboard
                </span>
              </div>
            </div>

            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li>
                <div
                  className={
                    activeOne == "finstats"
                      ? "group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500"
                      : "group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "finstats" ? "blue" : "gray"}
                    className="h-10 w-10 opacity-75 cursor-pointer"
                    onClick={() => {
                      handler({ param: "finstats" });
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Financial Stats
                  </span>
                </div>
              </li>

              <li>
                <div
                  className={
                    activeOne == "fundApproval"
                      ? "group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500"
                      : "group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "fundApproval" ? "blue" : "gray"}
                    className="w-10 h-10 opacity-75 cursor-pointer"
                    onClick={() => {
                      handler({ param: "fundApproval" });
                    }}
                  >
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"></path>
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Fund Approval
                  </span>
                </div>
              </li>
              <li
              >
                <div
                  className={activeOne == "charities" ? 
                  "group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500"
                  :"group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  } 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "charities" ? "blue":"gray"}
                    className="w-10 h-10 opacity-75 cursor-pointer"
                    onClick={() => {
                      handler({ param: "charities" });
                    }}
                  >
                    <path 
                      clip-rule="evenodd" 
                      fill-rule="evenodd" 
                      d="M1 2.75A.75.75 0 011.75 2h10.5a.75.75 0 010 1.5H12v13.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5H2v-13h-.25A.75.75 0 011 2.75zM4 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM4.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM8.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM14.25 6a.75.75 0 00-.75.75V17a1 1 0 001 1h3.75a.75.75 0 000-1.5H18v-9h.25a.75.75 0 000-1.5h-4zm.5 3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"></path>
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Charities
                  </span>
                </div>
              </li>
              <li>
                <div
                  className={
                    activeOne == "withdrawalRequests"
                      ? "group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500"
                      : "group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "withdrawalRequests" ? "blue" : "gray"}
                    className="w-10 h-10 opacity-75 cursor-pointer"
                    onClick={() => {
                      handler({ param: "withdrawalRequests" });
                    }}
                  >
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 00.177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 17H3.75A1.75 1.75 0 012 15.25V4.75zm8.75 4a.75.75 0 00-1.5 0v2.546l-.943-1.048a.75.75 0 10-1.114 1.004l2.25 2.5a.75.75 0 001.114 0l2.25-2.5a.75.75 0 10-1.114-1.004l-.943 1.048V8.75z"></path>
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Withdrawl Requests
                  </span>
                </div>
              </li>

              {/* <li
              >
                <div
                  className={activeOne == "blog" ? 
                  "group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500"
                  :"group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  } 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "blog" ? "blue":"gray"}
                    className="w-10 h-10 opacity-75 cursor-pointer"
                    onClick={() => {
                      handler({ param: "blog" });
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Blog
                  </span>
                </div>
              </li> */}
              <li
              >
                <div
                  className={activeOne == "charityWithdrawal" ? 
                  "group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500"
                  :"group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  } 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "charityWithdrawal" ? "blue":"gray"}
                    className="w-10 h-10 opacity-75 cursor-pointer"
                    onClick={() => {
                      handler({ param: "charityWithdrawal" });
                    }}
                  >
                    <path 
                      clip-rule="evenodd" 
                      fill-rule="evenodd" 
                      d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z">
                    </path>
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Charity Withdrawal
                  </span>
                </div>
              </li>

              <li>
                <div
                  className={
                    activeOne == "queries"
                      ? "group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500"
                      : "group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={activeOne == "queries" ? "blue" : "gray"}
                    className="w-10 h-10 opacity-75 cursor-pointer"
                    onClick={() => {
                      handler({ param: "queries" });
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Queries
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={() => {
                handler({ param: "logout" });
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
