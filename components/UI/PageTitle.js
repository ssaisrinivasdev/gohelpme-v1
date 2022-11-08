import React from "react";

function PageTitle({ title, desc }) {
  return (
    <div
      className={` items-center align-middle ${
        title ? "bg-black py-36" : ""
      }  flex flex-col text-center text-white`}
    >
      <h1 className="text-4xl my-1">{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default PageTitle;
