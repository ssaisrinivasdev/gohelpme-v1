import React from "react";
import DefaultTitle from "./DefaultTitle";
import Cards from "./FundCards";
import PageTitle from "./PageTitle";

function CategoryFunds({ title, desc, categoryTitle }) {
  return (
    <div>
      <PageTitle title={title} desc={desc} />
      <DefaultTitle title={categoryTitle} />
      <div className="grid grid-flow-row col-auto grid-cols-1 items-center text-center mx-auto">
        <div className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default CategoryFunds;
