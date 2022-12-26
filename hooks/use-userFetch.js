import React from "react";
import { useEffect } from "react";
import jwt from "jsonwebtoken";

function useUserFetch() {
  useEffect(() => {
    handler();
  }, []);

  async function handler() {
    const token = localStorage.getItem("token");
    let id = null;

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          console.log("no err");
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

    if (result.status >= 200 && result.status <= 300) {
      const jsonresultData = await result.json();

      console.log(jsonresultData);

      return jsonresultData;
    }
  }
}

export default useUserFetch;
