import React, { useEffect, useState } from "react";
import InfoCards from "./InfoCards";

function FundsComp() {
  const [rendered, setRendered] = useState("All");
  const [InProgress, setInProgress] = useState(0);
  const [Approved, setApproved] = useState(0);
  const [Rejected, setRejected] = useState(0);

  useEffect(() => {
    const onLoad = async () => {
      const res = await fetch(
        `http://gohelpme.online/api/admin/funds-status/${rendered}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await res.json();
      setInProgress(
        response.funds[0].InProgress.length < 1
          ? 0
          : response.funds[0].InProgress[0]?.count
      );
      setApproved(
        response.funds[0].Approved.length < 1
          ? 0
          : response.funds[0].Approved[0]?.count
      );
      setRejected(
        response.funds[0].Rejected.length < 1
          ? 0
          : response.funds[0].Rejected[0]?.count
      );
    };

    onLoad();
  }, [rendered]);
  return (
    <div>
      <div className=" lg:flex lg:justify-between">
        <h3 className="ml-3 mt-10 text-3xl font-bold">Funds:</h3>
        <form className="flex gap-5">
          <h2 className="ml-3 mt-10 py-1 text-xl text-gray-600">Category:</h2>
          <div className="mt-10 mr-10">
            <select
              // {...register("category")}
              // onChange={handleSubmit(handler)}
              onChange={(e) => {
                // handler(e);
                setRendered(e.target.value);
              }}
              className=" text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            >
              <option value="All">All</option>
              <option value="Medical">Medical</option>
              <option value="Memorial">Memorial</option>
              <option value="Emergency">Emergency</option>
              <option value="NonProfit">NonProfit</option>
              <option value="Emergency">FinancialEmergency</option>
              <option value="Animals">Animals</option>
              <option value="Environment">Environment</option>
              <option value="Business">Business</option>
              <option value="Community">Community</option>
              <option value="Competition">Competition</option>
              <option value="Creative">Creative</option>
              <option value="Event">Event</option>
              <option value="Faith">Faith</option>
              <option value="Family">Family</option>
              <option value="Sports">Sports</option>
              <option value="Wishes">Wishes</option>
              <option value="Travel">Travel</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </form>
        <div></div>
      </div>
      <div className="py-10 xl:gap-7 xl:flex xl:flex-row flex flex-col gap-10 ml-3">
        <InfoCards
          key="1"
          category={rendered}
          value={Approved}
          progress="Approved"
          progressName="Approved"
        />
        <InfoCards
          key="2"
          category={rendered}
          value={InProgress}
          progress="InProgress"
          progressName="InProgress"
        />
        <InfoCards
          key="3"
          category={rendered}
          value={Rejected}
          progress="Rejected"
          progressName="Rejected"
        />
      </div>
    </div>
  );
}

export default FundsComp;
