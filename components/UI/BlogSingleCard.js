import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function BlogSingleCard({ data }) {
  const router = useRouter();
  console.log(data);
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        router.push(`/blog/${data._id}`);
      }}
    >
      <img
        class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src={data.images[0] || "/images/blog/donts.jpg"}
        alt=""
      />

      <div class="mt-8">
        <h1 class="mt-4 text-xl font-semibold text-gray-800 ">{data.title}</h1>

        <p class="mt-2 text-gray-500 ">{data.long_description}</p>

        <div class="flex items-center justify-between mt-4">
          <div>
            <p class="text-sm text-gray-500 ">
              {data.createdAt.substring(0, 10)}
            </p>
          </div>

          <Link
            href={`/blog/${data._id}`}
            class="inline-block text-blue-500 underline hover:text-blue-400"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogSingleCard;
