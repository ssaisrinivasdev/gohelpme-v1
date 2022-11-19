import '../styles/globals.css'
import GlobalContext from '../store/global-context'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
const [email, setEmail] = useState("")
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [username, setUsername] = useState("")


  return (
    <GlobalContext.Provider value={[{email, setEmail},{isLoggedIn, setIsLoggedIn},{username, setUsername}]}>
    <Component {...pageProps} />
    </GlobalContext.Provider>
  )
  
}

export default MyApp 
