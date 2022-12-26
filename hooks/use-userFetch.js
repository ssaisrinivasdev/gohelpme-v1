import React, { useState } from "react";
import { useEffect } from "react";
import jwt from "jsonwebtoken";

function useUserFetch() {
  const [data, setData] = useState(null);
  useEffect(() => {
    handler();
  }, []);

  async function handler() {
    const [id, setId] = useState(null);
    const token = localStorage.getItem("token");
    // let id = null;

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          console.log("no err");
        } else {
          setId(decoded.id);
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

    if (result.status >= 200 && result.status <= 300) {
      const jsonresultData = await result.json();

      setData(jsonresultData);
    }
  }

  return data;
}

export default useUserFetch;
