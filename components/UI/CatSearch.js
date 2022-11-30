import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function CatSearch({ placeholder }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const searchNow = (data) => {
    event.preventDefault();
    const { search, category } = data;
    router.push(`/funds/search?keyword=${search}&category=${category}&page=1`);
  };

  return (
    <form
      onSubmit={handleSubmit(searchNow)}
      className="flex flex-col gap-4 xl:flex-row xl:w-[980px] xl:mx-auto py-5"
    >
      <div className="xl:w-[150px] w-64 mx-auto">
        <select
          {...register("category")}
          className=" w-56 py-3 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
        >
          <option value="Medical">Medical</option>
          <option value="Memorial">Memorial</option>
          <option value="Emergency">Emergency</option>
          <option value="NonProfit">NonProfit</option>
          <option value="Emergency">FinancialEmergency</option>
          <option value="Animals">Animals</option>
          <option value="Environment">Environment</option>
          <option value="Business">Business</option>
          <option value="Community">Community</option>
          <option value="Competition">Competition</option>
          <option value="Creative">Creative</option>
          <option value="Event">Event</option>
          <option value="Faith">Faith</option>
          <option value="Family">Family</option>
          <option value="Sports">Sports</option>
          <option value="Wishes">Wishes</option>
          <option value="Travel">Travel</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="w-[450px]">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            {...register("search")}
            type="text"
            placeholder="Search by fund"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
          />
        </div>
      </div>
      <input
        type="submit"
        value="Search"
        class="w-[200px] px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      />
    </form>
  );
}

export default CatSearch;
