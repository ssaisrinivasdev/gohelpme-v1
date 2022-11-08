import React from "react";

function DefaultTitle(props) {
  return (
    <div>
      <h1 className="text-xl font-bold text-color1 lg:text-xl pt-8 ml-9 xl:pt-8 xl:px-[325px]">
        {props.title}
      </h1>
    </div>
  );
}

export default DefaultTitle;
