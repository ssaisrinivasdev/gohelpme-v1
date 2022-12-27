import { useEffect } from "react";
import { useState } from "react";
import jwt from "jsonwebtoken";

function useLoginCheck() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
          setIsLoading(false);
        } else {
          setIsLoggedIn(true);

          setId(decoded.id);
          setIsLoading(false);
        }
      });
    }
  }, []);

  if (!isLoading) {
    return {
      isLoggedIn,
      id,
    };
  }
}

export default useLoginCheck;
