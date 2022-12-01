import React from "react";
import Footer from "../../components/UI/Footer";
import FundData from "../../components/UI/FundData";
import Header from "../../components/UI/Header";

function Fundraiser({ fund }) {
  console.log(fund);

  return (
    <div>
      <Header />
      <FundData fund={fund} />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const fundraiserId = params.fundraiser;

  let result = await fetch("http://gohelpme.online/api/fund/" + fundraiserId);

  const data = await result.json();

  const fund = data.fund;

  // let fund = posts.find(fund => fund._id === fundraiserId)

  return {
    props: {
      fund,
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
