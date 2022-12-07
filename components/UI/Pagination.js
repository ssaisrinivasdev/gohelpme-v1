import React from 'react'

function Pagination(props) {
  return (
    <ol class="flex justify-center gap-1 text-xs font-medium">
  <li>
    <a
      href="#"
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
    </a>
  </li>


  {}

  <li>
    <a
      href="#"
      class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
    >
      1
    </a>
  </li>

  <li
  onClick={(event)=> {props.handler(event.target.value)}}
  value="2"
    class="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
  > 2</li>
   

  

  <li>
    <a
      href="#"
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
    </a>
  </li>
</ol>

  )
}

export default Pagination