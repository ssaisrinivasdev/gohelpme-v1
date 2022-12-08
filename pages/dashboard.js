import React, { useState } from "react";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import InfoButtons from "../components/UI/InfoButtons";
import Profile from "../components/UI/Profile";
import ProfileCards from "../components/UI/ProfileCards";
import ProfileFunds from "../components/UI/ProfileFunds";
import Search from "../components/UI/CatSearch";
import ProfileForm from "../components/UI/ProfileForm";
import useLoginCheck from "../hooks/use-logincheck";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();
  const [buttonActive, setButtonActive] = useState("Dashboard");

  const { isLoggedIn } = useLoginCheck();
  console.log(`isLoggenIn: ${isLoggedIn}`);

  if (!isLoggedIn) {
    router.push("/login");
    return;
  } else {
    return (
      <div className="overflow-hidden bg-slate-100">
        <Header />
        <div>
          <Search placeholder="Search any funds" />{" "}
        </div>
        <div>
          <div className="xl:w-[1500px] xl:mx-auto">
            <div className="mx-3 text-left pb-10">
              <div class=" inline-flex border-b border-gray-200">
                <button
                  className={`check_button ${
                    buttonActive === "Dashboard"
                      ? "flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
                      : "flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 "
                  }`}
                  onClick={() => {
                    setButtonActive("Dashboard");
                  }}
                >
                  Dashboard
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
                <ProfileForm />
              </div>
            ) : (
              ""
            )}
            {buttonActive === "info" ? (
              <div className="w-[400px] mx-auto">
                <InfoButtons />
              </div>
            ) : (
              ""
            )}
            {buttonActive === "Dashboard" ? (
              <div>
                <div className="">
                  <Profile />
                </div>
                <div className="mx-3 py-4">
                  <ProfileFunds />
                </div>
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

  console.log(buttonActive);
}

export default Dashboard;
