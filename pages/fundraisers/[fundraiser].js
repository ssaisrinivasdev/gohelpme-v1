import { data } from "autoprefixer";
import React from "react";
import { useEffect, useState } from "react";
import Footer from "../../components/UI/Footer";
import FundData from "../../components/UI/FundData";
import Header from "../../components/UI/Header";

function Fundraiser({ fund }) {
  const [isLoading, setIsLoading] = useState(false)
  console.log(fund);
  

  useEffect(() => {
    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/fund/" + fund._id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );


      const data = await result.json();
      setIsLoading(true)
      return data
    };

    sync();
  },[]);


  console.log(data.following_status)

  if(isLoading){
    return (
      <div>
        <Header />
        <FundData fund={fund} followingStatus={data.following_status} />
        <Footer />
      </div>
    );
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  const fundraiserId = params.fundraiser;

  let result = await fetch("http://gohelpme.online/api/fund/" + fundraiserId,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await result.json();

  const fund = data.fund;

  const following_status = data.following_status

  // let fund = posts.find(fund => fund._id === fundraiserId)

  return {
    props: {
      fund,
      following_status
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  let result = await fetch("http://gohelpme.online/api/funds");

  const data = await result.json();

  const ids = data.funds.map((fund) => fund._id);

  const pathsWithParams = ids.map((id) => ({ params: { fundraiser: id } }));

  return {
    paths: pathsWithParams,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export default Fundraiser;
