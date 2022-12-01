import DefaultTitle from "./DefaultTitle";
import Cards from "./FundCards";
import { React, useEffect, useState } from "react";

function CategoryFunds({ category, categoryTitle }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    handler();
  }, []);

  async function handler() {
    let result = await fetch(
      "http://gohelpme.online/api/funds/search?keyword=&category=" +
        category +
        "&page=1",
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (result.status >= 200 && result.status <= 300) {
      const jsonresultData = await result.json();

      //console.log(jsonresultData.response.created_funds)

      let funds;

      if (jsonresultData) {
        funds = jsonresultData.funds.map((items) => {
          return <Cards key={items.title} items={items} />;
        });
      }

      setData(funds);
    }
  }

  return (
    <div>
      <DefaultTitle title={categoryTitle} />
      <div className="grid grid-flow-row col-auto grid-cols-1 mx-auto">
        <div className="w-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide">
          {data}
        </div>
      </div>
    </div>
  );
}

export default CategoryFunds;
