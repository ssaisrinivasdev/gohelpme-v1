import { deepOrange } from "@mui/material/colors";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/UI/Footer";
import FundData from "../../components/UI/FundData";
import FundUpdateForm from "../../components/UI/FundUpdateForm";
import Header from "../../components/UI/Header";
import useLoginCheck from "../../hooks/use-logincheck";
import EditIcon from "../../public/icons/edit";

function Fundraiser() {
  const router = useRouter();
  const [fundData, setFundData] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    const token = localStorage.getItem("token");
    let id = null;

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          console.log("err");
        } else {
          id = decoded.id;
        }
      });
    }else{
      console.err("Not logged in")
    }


    const { fundraiser } = router.query;
    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/fund/" + fundraiser,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await result.json();
      if(result.status >=200 && result.status <=205){
        if(data?.fund?.owner == id){
          setIsOwner(true);
        }
        setFundData(data);
      }
    };

    sync();
  }, [router.isReady, fundData]);

  return (
    <div>
      <Header />

      {isOwner && (
      <div className="mx-5 my-2 xl:w-[1250px] xl:mx-auto">
        <button
          type="button"
          onClick={() => {
            router.push(`/fundraisers/${fundData.fund._id}/updating=true`);
          }}
          class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform hover:bg-transparent border hover:border-color1 hover:text-color1  bg-color1 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <span class="mx-1">Edit</span>
        </button>
      </div>
      )} 

      {fundData && (
        <FundData
          fund={fundData.fund}
          followingStatus={fundData.following_status}
        />
      )}
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
