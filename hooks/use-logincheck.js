import { useEffect } from "react";
import { useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

function useLoginCheck(props) {
  const loginStat = props?.isLoggedIn;
  return loginStat;
}

export default useLoginCheck;

export function getStaticProps(req) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const token = localStorage.getItem("token");

  let token = req.cookies.get("token");

  useEffect(() => {
    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
          setIsLoading(false);
        } else {
          setIsLoggedIn(true);
          setIsLoading(false);
        }
      });
    }
  }, []);

  if (!isLoading) {
    return {
      props: isLoggedIn,
      // revalidate: 5,
    };
  }

  // let fund = posts.find(fund => fund._id === fundraiserId)
}
