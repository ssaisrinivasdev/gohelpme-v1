import React, { useEffect, useState } from "react";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";
import SingleBlog from "../../components/UI/SingleBlog";

import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";

function SinglePost() {
  const router = useRouter();

  const param = router.query;
  console.log(param.singlepost);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    handler();
  }, []);

  const handler = async () => {
    const res = await fetch(
      "http://gohelpme.online/api/post/" + param.singlepost,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await res.json();

    if (res.status >= 200 && res.status <= 205) {
      console.log(response);
      setPost(response);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Header />

      {loading ? (
        <div className="max-w-7xl mx-auto">
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
        <SingleBlog data={post} />
      )}
      <Footer />
    </div>
  );
}

export default SinglePost;
