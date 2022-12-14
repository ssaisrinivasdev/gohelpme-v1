import Link from "next/link";
import React from "react";

function InfoCards(props) {
  // let bgColor;
  // switch (props.progress) {
  //   case "Accepted":
  //     bgColor = "green-500";
  //     break;
  //   case "InProgress":
  //     bgColor = "blue-500";
  //     break;
  //   case "Rejected":
  //     bgColor = "red-600";
  //     break;
  //   default:
  //   // code block
  // }

  return (
    <div className="w-[330px]">
      <Link
        href=""
        className={`${
          props.progress === "Approved"
            ? "relative block rounded-sm border-t-4 p-8 pb-24 shadow-xl border-green-500"
            : props.progress === "InProgress"
            ? "relative block rounded-sm border-t-4 p-8 pb-24 shadow-xl border-blue-500"
            : props.progress === "Rejected"
            ? "relative block rounded-sm border-t-4 p-8 pb-24 shadow-xl border-red-600"
            : ""
        }`}
      >
        <div class="flex items-end">
          <h3 class="mb-2 text-4xl font-bold">{props.category}</h3>
        </div>

        <strong
          className={
            props.progress === "Approved"
              ? "rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-500"
              : props.progress === "InProgress"
              ? "rounded bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-500"
              : props.progress === "Rejected"
              ? "rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-500"
              : ""
          }
        >
          {props.progress}
        </strong>
        <p class="mt-4 text-5xl font-medium text-gray-600">{props.value}</p>
        <p class="mt-4 ml-2 text-xs font-medium text-gray-600">Last 24 Hours</p>

        <span class="absolute bottom-8 right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-pink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default InfoCards;
