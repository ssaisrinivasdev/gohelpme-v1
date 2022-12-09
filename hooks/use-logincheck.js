import { useEffect } from "react";
import { useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

function useLoginCheck() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      });
    }

    if (router.query !== "/login" && !isLoggedIn) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return "Loading";
  }
}

export default useLoginCheck;
