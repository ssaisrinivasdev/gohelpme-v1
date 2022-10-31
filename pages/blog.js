import React from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import PageTitle from "../components/UI/PageTitle";
import BlogCards from "../components/UI/BlogCards";

function Blog() {
  return (
    <div>
      <Header />
      <PageTitle Title="Blog" Desc="Home/Blog" />

      {/* Blog Body */}
      <BlogCards />

      <Footer />
    </div>
  );
}

export default Blog;
