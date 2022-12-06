import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import Link from "next/link";
import React from "react";

function Button(props) {
  return (
    <div className="pt-5 w-40 ">
      <Link
        className="group flex items-center justify-between rounded-full border border-red-600 bg-red-600 px-2 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
        href={`/${props.link}`}
      >
        <span className="mx-auto font-medium text-white transition-colors group-hover:text-red-600 group-active:text-red-500">
          <span>{props.title}</span>
        </span>
      </Link>
    </div>
  );
}

export default Button;
