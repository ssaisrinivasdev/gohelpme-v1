import React, { useState } from "react";
import { useEffect } from "react";
import jwt from "jsonwebtoken";

function useUserFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handler();
  }, []);

  async function handler() {
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
      setData(jsonresultData);
      setLoading(false);
    }
  }

  if (!loading) {
    return data;
  }
}

export default useUserFetch;
