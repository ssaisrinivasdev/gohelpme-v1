import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function useLoginCheck() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // 3. Create out useEffect function
  useEffect(() => {
    if (!router.isReady) return;
    // Perform localStorage action
    const token = localStorage.getItem("token");

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
          setIsLoaded(true);
        }
      });
    }
  }, [router.isReady]);

  if (isLoaded) {
    return isLoggedIn;
  }
}

export default useLoginCheck;
