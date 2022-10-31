import React from "react";

function PageTitle({ Title, Desc }) {
  return (
    <div className=" py-36 items-center align-middle bg-black flex flex-col text-center text-white">
      <h1 className="text-4xl my-1">{Title}</h1>
      <p>{Desc}</p>
    </div>
  );
}

export default PageTitle;
