import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cards from "../components/UI/FundCards";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Search from "../components/UI/Search";

function SearchPage() {
  const router = useRouter();

  const { keyword, page } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/funds/search?keyword=" +
          keyword +
          "&category=&page=1",
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

        let createdFunds;

        if (jsonresultData) {
          createdFunds = jsonresultData.funds.map((items) => {
            return <Cards key={items.title} items={items} />;
          });
        }

        setData(createdFunds);
      }
    };

    sync();
  }, [keyword, page]);

  return (
    <div>
      <Header />
      <div className="w-[450px] xl:w-[600px] mx-auto">
        <Search placeholder="Search all funds" />
      </div>
      <div className="xl:w-[1200px] mx-10 min-md:mx-auto xl:mx-auto max-md:flex-col max-md:flex">
        {data}
      </div>

      <Footer />
    </div>
  );
}

export default SearchPage;
