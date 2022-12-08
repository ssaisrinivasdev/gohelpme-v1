import { useEffect } from "react";
import { useState } from "react";
import jwt from "jsonwebtoken";

function useLoginCheck() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [decodedId, setDecodedId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
          setDecodedId(decoded.id);
        }
        setIsLoaded(true);
      });
    }
  }, []);

  if (isLoaded) {
    return {
      isLoggedIn,
      decodedId,
    };
  }
}

export default useLoginCheck;
