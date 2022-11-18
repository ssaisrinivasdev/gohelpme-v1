import '../styles/globals.css'
import GlobalContext from '../store/global-context'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
const [email, setEmail] = useState("")
const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <GlobalContext.Provider value={[{email, setEmail},{isLoggedIn, setIsLoggedIn}]}>
    <Component {...pageProps} />
    </GlobalContext.Provider>
  )
  
}

export default MyApp 
