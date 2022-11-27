import DefaultTitle from "./DefaultTitle";
import Cards from "./FundCards";
import PageTitle from "./PageTitle";
import { React, useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function CategoryFunds({ title, desc, categoryTitle, id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    handler();
  }, []);

  async function handler() {
    const token = localStorage.getItem("token");
    let id = null;
    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
        } else {
          id = decoded.id;
        }
      });
    }
    let result = await fetch("http://gohelpme.online/api/user/" + id, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
    });

    if (result.status >= 200 && result.status <= 300) {
      const jsonresultData = await result.json();

      //console.log(jsonresultData.response.created_funds)

      let createdFunds;

      if (jsonresultData) {
        createdFunds = jsonresultData.response.created_funds.map((items) => {
          return <Cards key={items.title} items={items} />;
        });
      }

      setData(createdFunds);
    }
  }

  return (
    <div>
      <PageTitle title={title} desc={desc} />
      <DefaultTitle title={categoryTitle} />
      <div className="grid grid-flow-row col-auto grid-cols-1 items-center text-center mx-auto">
        <div className="w-full overflow-auto whitespace-nowrap scroll-smooth">
          {data}
        </div>
      </div>
    </div>
  );
}

export default CategoryFunds;
