import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const searchNow = (data) => {
    const { search } = data;
    router.push(`/search?keyword=${search}&page=1`);
  };

  return (
    <form onSubmit={handleSubmit(searchNow)} className="max-w-xl px-4 mt-12">
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
          placeholder="Search the funds"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-color1"
        />
      </div>
    </form>
  );
}

export default Search;
