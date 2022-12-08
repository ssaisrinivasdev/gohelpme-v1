import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import jwt from "jsonwebtoken";

function useLoginCheck() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      });
    } else {
      console.log("token notthere");
    }
  }, [isLoggedIn]);
  return isLoggedIn;
}

export default useLoginCheck;
