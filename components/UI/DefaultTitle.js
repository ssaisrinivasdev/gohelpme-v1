import React from "react";

function DefaultTitle(props) {
  return (
    <div>
      <h1 className="text-xl font-bold text-color1 lg:text-xl ">
        {props.title}
      </h1>
    </div>
  );
}

export default DefaultTitle;
