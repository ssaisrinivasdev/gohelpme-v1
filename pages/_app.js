import '../styles/globals.css'
import GlobalContext from '../store/global-context'
import { useState } from 'react'
// import {jwt} from "jsonwebtoken"

function MyApp({ Component, pageProps }) {
const [email, setEmail] = useState("")
let [isLoggedIn, setIsLoggedIn] = useState(false)
const [username, setUsername] = useState("")

// const token = localStorage.getItem('token');

// if(token)
// {
// 	jwt.verify(token, '$tr0ngkEy123!@#', function(err, decoded) {
//   	if (err) {
//     		isLoggedIn = false
//   	}else{
//     		isLoggedIn = true	
// 	  }	
// 	});
// }

  return (
    <GlobalContext.Provider value={[{email, setEmail},{isLoggedIn, setIsLoggedIn},{username, setUsername}]}>
    <Component {...pageProps} />
    </GlobalContext.Provider>
  )
  
}

export default MyApp 
