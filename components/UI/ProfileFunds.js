import DefaultTitle from "./DefaultTitle";
import Cards from "./FundCards";
import { React, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Skeleton from "@mui/material/Skeleton";

function ProfileFunds({ title, desc, categoryTitle }) {
  const [created_funds, setCreated_FundsData] = useState(null);
  const [following_funds, setFollowing_FundsData] = useState(null);
  const [donated_funds, setDonated_FundsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(created_funds);
  // console.log(following_funds);
  // console.log(donated_funds);

  function waitforme(ms) {
    // here is the key!

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, ms);
    });
  }

  useEffect(() => {
    handler();
  }, []);

  async function handler() {
    const token = localStorage.getItem("token");
    let id = null;
    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (!err) {
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

    if (result.status >= 200 && result.status < 300) {
      const jsonresultData = await result.json();

      //console.log(jsonresultData.response.created_funds)

      let createdFunds, donateFunds, followingFunds;
      if (jsonresultData) {
        createdFunds =
          jsonresultData.response.created_funds == "[]"
            ? false
            : jsonresultData.response.created_funds.map((items) => {
                return <Cards key={items._id} items={items} />;
              });
        donateFunds =
          jsonresultData.response.donated_funds == "[]"
            ? false
            : jsonresultData.response.donated_funds.map((items) => {
                return <Cards key={items._id} items={items} />;
              });
        followingFunds =
          jsonresultData.response.followed_funds == "[]"
            ? false
            : jsonresultData.response.followed_funds.map((items) => {
                return <Cards key={items._id} items={items} />;
              });
      }

      await waitforme(1650);

      setCreated_FundsData(createdFunds);
      setFollowing_FundsData(followingFunds);
      setDonated_FundsData(donateFunds);
      setIsLoading(false);
      console.log(donated_funds);
    }
  }

  // return (
  //   <div>
  //     <PageTitle title={title} desc={desc} />
  //     <DefaultTitle title={categoryTitle} />
  //     <div className="grid grid-flow-row col-auto grid-cols-1 mx-auto">
  //       <div className="w-full overflow-auto whitespace-nowrap scroll-smooth">
  //         {data}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="mx-auto">
      <div>
        <DefaultTitle title="Your Funds" />
        {isLoading ? (
          <div>
            <Skeleton width="20%" />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="80%"
              height={380}
              style={{ marginBottom: 16, marginTop: 16 }}
            />
          </div>
        ) : (
          <div className="grid grid-flow-row col-auto grid-cols-1 items-center mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth">
              {created_funds != null ? created_funds : ""}
            </div>
          </div>
        )}
      </div>
      {created_funds?.length == 0 && !isLoading ? (
        <p className="text-left mb-10">You haven't created any funds yet</p>
      ) : (
        ""
      )}
      <div>
        <DefaultTitle title="Donated Funds" />
        {isLoading ? (
          <div>
            <Skeleton width="20%" />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="80%"
              height={380}
              style={{ marginBottom: 16, marginTop: 16 }}
            />
          </div>
        ) : (
          <div className="grid grid-flow-row col-auto grid-cols-1 items-center mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth">
              {donated_funds != null ? donated_funds : ""}
            </div>
          </div>
        )}
      </div>
      {donated_funds?.length == 0 && !isLoading ? (
        <p className="text-left mb-10">You haven't donated yet</p>
      ) : (
        ""
      )}

      <div>
        <DefaultTitle title="Following Funds" />
        {isLoading ? (
          <div>
            <Skeleton width="20%" />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="80%"
              height={380}
              style={{ marginBottom: 16, marginTop: 16 }}
            />
          </div>
        ) : (
          <div className="grid grid-flow-row col-auto grid-cols-1 items-center mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth">
              {following_funds != null ? following_funds : ""}
            </div>
          </div>
        )}
      </div>
      {following_funds?.length == 0 && !isLoading ? (
        <p className="text-left mb-10">You haven't followed any funds</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProfileFunds;
