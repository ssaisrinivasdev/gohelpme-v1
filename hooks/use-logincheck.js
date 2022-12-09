import { useEffect } from "react";
import { useState } from "react";
import jwt from "jsonwebtoken";

function useLoginCheck() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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
  }, []);

  return isLoggedIn;
}

export default useLoginCheck;
