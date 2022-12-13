import DefaultTitle from "./DefaultTitle";
import Cards from "./FundCards";
import { React, useEffect, useState } from "react";
import Pagination from "./Pagination";

function CategoryFunds({ category }) {
  const [data, setData] = useState(null);
  // const [api, setApi] = useState(
  //   `http://gohelpme.online/api/funds/search?keyword=&category=${category}&page=1`
  // );

  useEffect(() => {
    handler();
  }, []);

  async function handler() {
    let api = `http://gohelpme.online/api/funds/search?keyword=&category=${category}&page=1`;

    // if (category === "Top") {
    //   setApi("http://Gohelpme.online/api/trendingfunds");
    // }
    let result = await fetch(
      category != "Top" ? api : "http://Gohelpme.online/api/trendingfunds",
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
        if (category == "Top") {
          funds = jsonresultData.funds[0]?.donations?.map((items) => {
            return <Cards key={items._id} items={items?.funds[0]} />;
          });
        } else {
          funds = jsonresultData.funds.map((items) => {
            return <Cards key={items.title} items={items} />;
          });
        }
      }

      setData(funds);
    }
  }

  return <div className="mt-5">{data}</div>;
}

export default CategoryFunds;
