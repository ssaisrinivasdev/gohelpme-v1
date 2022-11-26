import '../styles/globals.css'
import GlobalContext from '../store/global-context'
import { useState, useEffect } from 'react'
import jwt from "jsonwebtoken"
import { Provider } from 'react-redux'
import store from '../store/index'
import AppData from '../AppData/App_Data'


function MyApp({ Component, pageProps }) {
const [email, setEmail] = useState("")
const [isLoggedIn, setIsLoggedIn] = useState(null)
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
    // <Provider store={store} >
    <GlobalContext.Provider value={[{email, setEmail},{isLoggedIn, setIsLoggedIn},{username, setUsername}]}>
    <Component {...pageProps} />
    </GlobalContext.Provider>
    // </Provider>
  )
  
}

export default MyApp 
