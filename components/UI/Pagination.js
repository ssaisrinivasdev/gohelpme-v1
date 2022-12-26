import Link from "next/link";
import React from "react";

function Pagination(props) {
  console.log("fwef");

  const arrays = [];

  let totalPages = props.totalpages;
  let currentPage = props.currentpage;
  let endPage = 0,
    startPage = 0;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }
  console.log(totalPages);
  for (let i = startPage; i <= endPage; i++) {
    console.log(arrays);
    arrays.push(i);
  }
  console.log("hii");

  return (
    <ol class="flex justify-center gap-1 text-xs font-medium my-5">
      <li
        onClick={(event) => {
          props.handler(currentPage > 1 ? currentPage - 1 : 1);
        }}
        class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
      >
        <span class="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>

      {arrays?.map((number) => {
        return (
          <li
            key={number}
            value={number}
            onClick={(event) => {
              props.handler(
                event.target.value > 1 ? event.target.value - 1 : 1
              );
            }}
            class={
              number == currentPage
                ? "block h-8 w-8 rounded border-color1 bg-color1 text-center leading-8 text-white"
                : "block h-8 w-8 rounded border-color1 bg-white text-center leading-8 text-color1"
            }
          >
            {" "}
            {number}
          </li>
        );
      })}

      <li
        onClick={(event) => {
          props.handler(
            currentPage < totalPages ? currentPage + 1 : totalPages
          );
        }}
        class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
      >
        <span class="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
    </ol>
  );
}

export default Pagination;
