import Link from 'next/link'
import React from 'react'

function InfoCards() {
  return (
    <div className='w-[330px]'>
      <Link
  href=""
  class="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl"
>
  <h3 class="text-4xl font-bold">100+</h3>
  <p class="mt-4 text-lg font-medium text-gray-500">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
    provident.
  </p>

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
  )
}

export default InfoCards