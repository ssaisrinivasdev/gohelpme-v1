import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../../store/global-context";
import Cookies from "universal-cookie";
export default function Header() {
  const [state, setState] = useState(false);
  const navRef = useRef();
  const globalData = useContext(GlobalContext);
  const router = useRouter();
  const cookies = new Cookies();

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "How it works", path: "/howitworks" },
    { title: "FAQ's", path: "/faqs" },
    { title: "Fundraisers", path: "/fundraisers" },
    // { title: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  const LogoutHandler = async () => {
    fetch("http://gohelpme.online/api/logout", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.removeItem("token");
        localStorage.removeItem("loginStatus");
        cookies.remove("token");
        cookies.remove("isLoggedIn");
        console.log("Success:", data);
        globalData[1].setIsLoggedIn(false);
        // router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // const error = await result.json();
    // console.log(error.error)
    // console.log(result.status)

    // if(data.message === "success") {

    //   router.push("/")
    //   }
  };

  // console.log(globalData[1].isLoggedIn)
  return (
    <div>
      <nav ref={navRef} className="bg-white w-full top-0 z-20">
        <div className="items-center px-4 max-w-screen-2xl mx-auto lg:flex lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <Link href="/">
              <img
                src="/images/Logo/Logo.jpg"
                width={220}
                height={50}
                alt="Float UI logo"
              />
            </Link>
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
            }`}
          >
            <div>
              <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    Contact
                  </Link>
                </li>
                {!globalData[1].isLoggedIn && (
                  <li className="mt-4 lg:mt-0">
                    <Link
                      href="/login"
                      className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
                    >
                      SignIn
                    </Link>
                  </li>
                )}
                {!globalData[1].isLoggedIn && (
                  <li className="mt-8 lg:mt-0">
                    <Link
                      href="/registration"
                      className="py-3 px-4 text-center text-white bg-color1 hover:bg-white hover:text-[#333333] rounded-md shadow block lg:inline"
                    >
                      Sign Up
                    </Link>
                  </li>
                )}

                {globalData[1].isLoggedIn && (
                  <li className="mt-8 lg:mt-0">
                    <Link
                      href="/dashboard"
                      className="py-3 px-4 text-center text-white bg-color1 hover:bg-white hover:text-[#333333] rounded-md shadow block lg:inline"
                    >
                      My Dashboard
                    </Link>
                  </li>
                )}

                {globalData[1].isLoggedIn && (
                  <li className="mt-8 lg:mt-0">
                    <Link
                      href="/"
                      onClick={LogoutHandler}
                      className="py-3 px-4 text-center text-white bg-color1 hover:bg-white hover:text-[#333333] rounded-md shadow block lg:inline"
                    >
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex-1">
              <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
