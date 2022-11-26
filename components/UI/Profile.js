import Link from 'next/link'
import React from 'react'
import GlobalContext from '../../store/global-context'
import {useContext, useEffect, useState} from 'react'

function Profile() {
  const [data, setData] = useState(null)
  const globalData = useContext(GlobalContext)
 
  useEffect(() => {
    handler()
  }, []);

  async function handler ()  {
    let result = await fetch("http://gohelpme.online/api/user/637a3e91d5edc93ca1fc446e", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    const jsonresultData = await result.json();
    console.log(jsonresultData.response.name)
    setData(jsonresultData.response.name)
  }
  

  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="/images/profile.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Hii {data} </h2>

        <p className="mt-4 text-gray-600">
          You've been raising funds for the people in need, keep on helping people and spreading love.
        </p>

        <Link
          href="/createfund"
          className="mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
        >
          <span className="text-sm font-medium"> Start a fund </span>

          <svg
            className="ml-3 h-5 w-5"
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
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Profile