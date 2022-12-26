import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BlogSingleCard from "./BlogSingleCard";
import Pagination from "./Pagination";

function BlogCards() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    handler();
  }, [currentPage]);

  const handler = async () => {
    const res = await fetch(
      "http://gohelpme.online/api/posts?page=" +
        currentPage +
        "&status=published",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await res.json();

    if (res.status >= 200 && res.status <= 205) {
      setPosts(response);
      setLoading(false);
    }
  };

  const paginationHandler = (data) => {
    console.log(`page.no: ${data}`);
    setCurrentPage(data);
  };

  return (
    <div>
      <section class="bg-slate-100">
        <div class="container px-6 py-10 mx-auto">
          <div class="flex items-center justify-between">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
              recent posts{" "}
            </h1>
          </div>

          <hr class="my-8 border-gray-200 " />

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <div>
                <Skeleton width="20%" />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="80%"
                  height={380}
                  style={{ marginBottom: 16, marginTop: 16 }}
                />
              </div>
            ) : (
              posts.posts.map((data) => {
                return <BlogSingleCard data={data} key={data._id} />;
              })
            )}
          </div>

          {loading ? (
            <div>
              <Skeleton width="20%" />
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="80%"
                height={380}
                style={{ marginBottom: 16, marginTop: 16 }}
              />
            </div>
          ) : (
            <Pagination
              handler={paginationHandler}
              currentpage={currentPage}
              totalpages={posts.pages}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogCards;
