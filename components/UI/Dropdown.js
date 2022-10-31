import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// Profile Dropdown
const DropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={`relative ${props.class}`}>
      <button
        ref={profileRef}
        className="w-10 h-10 outline-none lg:focus:ring-indigo-600"
        onClick={() => setState(!state)}
      >
        DropDown
      </button>

      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        <li>
          <Link
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
            href="/"
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
