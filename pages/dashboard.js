import React, { useState } from "react";
import CategoryFunds from "../components/UI/CategoryFunds";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import InfoButtons from "../components/UI/InfoButtons";
import Profile from "../components/UI/Profile";
import ProfileCards from "../components/UI/ProfileCards";

function Dashboard() {
  const [buttonActive, setButtonActive] = useState("funds");

  console.log(buttonActive);

  return (
    <div>
      <Header />
      <div>
        <div className="w-[1500px] mx-auto">
          <div className="mx-10 text-left py-10">
            <div class=" inline-flex border-b border-gray-200">
              <button
                className={`check_button ${
                  buttonActive === "funds"
                    ? "flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
                    : "flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 "
                }`}
                onClick={() => {
                  setButtonActive("funds");
                }}
              >
                Funds
              </button>

              <button
                className={`check_button ${
                  buttonActive === "info"
                    ? "flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
                    : "flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 "
                }`}
                onClick={() => {
                  setButtonActive("info");
                }}
                class="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 "
              >
                Info
              </button>

              <button
                className={`check_button ${
                  buttonActive === "profile"
                    ? "flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
                    : "flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 "
                }`}
                onClick={() => {
                  setButtonActive("profile");
                }}
              >
                Profile
              </button>
            </div>
          </div>

          {buttonActive === "profile" ? (
            <div>
              <Profile />
              <div className=" md:flex">
                <ProfileCards title="Address" />{" "}
                <ProfileCards title="Details" /> <ProfileCards title="Help" />{" "}
              </div>
            </div>
          ) : (
            ""
          )}
          {buttonActive === "info" ? (
            <div>
              <InfoButtons />
            </div>
          ) : (
            ""
          )}
          {buttonActive === "funds" ? (
            <div>
              <CategoryFunds categoryTitle="Funds Following" />
              <CategoryFunds categoryTitle="Funds Created" />
              <CategoryFunds categoryTitle="Donations" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
