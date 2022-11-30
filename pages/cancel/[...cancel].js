import { useRouter } from "next/router";

import React from "react";

function Cancel() {
  const router = useRouter();
  const { cancel } = router.query;

  const sync = async () => {
    let result = await fetch(
      "http://gohelpme.online/api/cancelpayment/" + { cancel },
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  return (
    <div>
      <p>Query: {cancel}</p>
    </div>
  );
}

export default Cancel;
