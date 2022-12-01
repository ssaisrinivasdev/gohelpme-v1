import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import Link from "next/link";
import React from "react";

function Button(props) {
  return (
    <div className="pt-5 w-52 ">
      <Link
        className="group flex items-center justify-between rounded-full border border-red-600 bg-red-600 px-2 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
        href={`/${props.link}`}
      >
        <span className="pl-2 font-medium text-white transition-colors group-hover:text-red-600 group-active:text-red-500">
          <span>{props.title}</span>
        </span>

        <span className="ml-2 flex-shrink-0 rounded-full border border-current bg-white p-2 text-red-600 group-active:text-red-500">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default Button;
