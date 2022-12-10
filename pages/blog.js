import React, { useEffect } from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import PageTitle from "../components/UI/PageTitle";
import BlogCards from "../components/UI/BlogCards";
import useLoginCheck from "../hooks/use-logincheck";

function Blog() {
  const loginStat = useLoginCheck();

  useEffect(() => {
    console.log(loginStat);
  }, []);

  return (
    <div className=" bg-slate-100">
      <Header />
      <PageTitle title="Blog" desc="Home/Blog" />

      {/* Blog Body */}
      <BlogCards />

      <Footer />
    </div>
  );
}

export default Blog;
