import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/UI/Footer";
import FundData from "../../components/UI/FundData";
import Header from "../../components/UI/Header";

function Fundraiser() {
  const router = useRouter();
  const { fundraiser } = router.query;
  console.log(fundraiser)

  const [fundData, setFundData] = useState(null)
  console.log(fundData)

  useEffect(() => {

    


    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/fund/" + fundraiser,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      
      );

      const data = await result.json()
      setFundData(data)
      
    };

    sync();
    
  },[]);

  return (

    <div>
      <Header />

      {fundData && <FundData fund={fundData.fund} followingStatus={fundData.following_status} />}
            
            
      <Footer />
    </div>
  );
}

// export async function getStaticProps(context) {
//   const { params } = context;

//   const fundraiserId = params.fundraiser;

//   let result = await fetch("http://gohelpme.online/api/fund/" + fundraiserId);

//   const data = await result.json();

//   const fund = data.fund;

//   const following_status = data.following_status

//   // let fund = posts.find(fund => fund._id === fundraiserId)

//   return {
//     props: {
//       fund,
//       following_status
//     },
//     revalidate: 5,
//   };
// }

// export async function getStaticPaths() {
//   let result = await fetch("http://gohelpme.online/api/funds");
  
//   const data = await result.json();

//   const ids = data.funds.map((fund) => fund._id);

//   const pathsWithParams = ids.map((id) => ({ params: { fundraiser: id } }));

//   return {
//     paths: pathsWithParams,
//     fallback: "blocking", // can also be true or 'blocking'
//   };
// }

export default Fundraiser;
