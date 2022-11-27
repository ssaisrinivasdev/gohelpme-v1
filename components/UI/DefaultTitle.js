import React from "react";

function DefaultTitle(props) {
  return (
    <div>
      <h1 className="text-xl font-bold text-color1 lg:text-xl pt-8 mx-10 lg:mx-18 2xl:mx-96 xl:pt-8 ">
        {props.title}
      </h1>
    </div>
  );
}

export default DefaultTitle;
