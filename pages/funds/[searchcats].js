import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/UI/Footer";
import Cards from "../../components/UI/FundCards";
import Header from "../../components/UI/Header";
import CatSearch from "../../components/UI/CatSearch";
import { useForm } from "react-hook-form";

function Search() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { keyword, category, page } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/funds/search?keyword=" +
          keyword +
          "&category=" +
          category +
          "&page=" +
          page,
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
  }, [keyword, category, page]);

  return (
    <div>
      <Header />
      <CatSearch placeholder="Search by fund" />
      <div className="xl:w-[1200px] mx-10 min-md:mx-auto xl:mx-auto max-md:flex-col max-md:flex">
        {data}
      </div>

      <Footer />
    </div>
  );
}

export default Search;
