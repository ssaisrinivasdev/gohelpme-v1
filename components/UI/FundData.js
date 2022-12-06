import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import ProgressBar from "./ProgressBar";
import { useRouter } from "next/router";
import Donations from "./Donations";
import DefaultTitle from "./DefaultTitle";

function FundData({ fund, followingStatus }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donationsData, setDonationsData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log(fund)
    donationHandler();
  }, []);

  async function donationHandler() {
    let donations
    if (fund.donations) {
      donations = fund.donations.map((data) => {
        return (
          <Donations data={data} key={data.donator_name} />
        )
      })
      setDonationsData(donations);
    }
  }

  async function handler() {
    const name = isAnonymous ? "Anonymous" : "null";
    let result = await fetch("http://gohelpme.online/api/payment", {
      method: "PUT",
      body: JSON.stringify({
        "id": fund.id,
        "title": fund.title,
        "donator_name": name,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await result.json();

    const redirectLink = data.redirect_link;

    if (redirectLink) {
      router.push(redirectLink);
    }
  }

  return (
      <section className="">
        <div className="relative mx-auto max-w-screen-xl px-4 pb-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
            {/* here comes the slider */}
            <ImageSlider image={fund.images} id={fund._id} status={followingStatus} />

            <div className="xl:mx-20">
              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{fund.title}</h1>

                  <div className="drop-shadow-md my-5">
                    <ProgressBar
                      goal={fund.goal}
                      percent={fund.percent}
                      currentValue={fund.currentValue}
                    />
                  </div>
                  <label class="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      class="sr-only peer"
                      onClick={() => {
                        setIsAnonymous(!isAnonymous);
                      }}
                    ></input>

                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Go Anonymous and donate
                    </span>
                  </label>
                  <button
                    onClick={handler}
                    type="button"
                    className="my-10 block rounded bg-color1 px-8 py-2 font-medium text-white hover:text-color1 hover:border-color1 border-2 text-lg hover:bg-white"
                  >
                    Donate now
                  </button>
                </div>
              </div>
              <DefaultTitle title="Recent Donations" />
              <div>{donationsData}</div>
              
            </div>
            
            <div className="prose max-w-none group-open:hidden">
                <p>{fund.long_description}</p>
              </div>

          </div>
          
        </div>
      </section>
  );
}

export default FundData;
