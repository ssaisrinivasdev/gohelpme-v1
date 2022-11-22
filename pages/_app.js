import '../styles/globals.css'
import GlobalContext from '../store/global-context'
import { useState, useEffect } from 'react'
import jwt from "jsonwebtoken"


function MyApp({ Component, pageProps }) {
const [email, setEmail] = useState("")
const [isLoggedIn, setIsLoggedIn] = useState(false)
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


useEffect(() => {
  // Perform localStorage action
  const token = localStorage.getItem('token');

  if(token)
  {
    jwt.verify(token, '$tr0ngkEy123!@#', function(err, decoded) {
      if (err) {
          setIsLoggedIn(false) 
      }else{
        setIsLoggedIn(true) 
      }	
    });
  }
  
}, [])





  return (
    <GlobalContext.Provider value={[{email, setEmail},{isLoggedIn, setIsLoggedIn},{username, setUsername}]}>
    <Component {...pageProps} />
    </GlobalContext.Provider>
  )
  
}

export default MyApp 
