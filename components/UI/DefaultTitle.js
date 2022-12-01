import React from "react";

function DefaultTitle(props) {
  return (
    <div>
      <h1 className="text-xl mx-10 font-bold text-color1 lg:text-xl ">
        {props.title}
      </h1>
    </div>
  );
}

export default DefaultTitle;
