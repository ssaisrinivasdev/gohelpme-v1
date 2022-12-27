import React, { useEffect } from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import PageTitle from "../../components/UI/PageTitle";
import BlogCards from "../../components/UI/BlogCards";
import useLoginCheck from "../../hooks/use-logincheck";
import { useForm } from "react-hook-form";
import { PostAddSharp } from "@mui/icons-material";
import { useState } from "react";

function Blog() {
  const isLoggedIn = useLoginCheck();

  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, []);

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
