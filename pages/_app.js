import "../styles/globals.css";
import GlobalContext from "../store/global-context";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import store, { Persistor } from "../store/index";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState("");

  // const token = useSelector((state) => state.token.input);

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");

    if (token) {
      jwt.verify(token, "$tr0ngkEy123!@#", function (err, decoded) {
        if (err) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <GlobalContext.Provider
          value={[
            { email, setEmail },
            { isLoggedIn, setIsLoggedIn },
            { username, setUsername },
          ]}
        >
        <NextNProgress color="#DB162F"
/>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
