import '../styles/globals.css'
import GlobalContext from '../store/global-context'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
const [email, setEmail] = useState("")

  return (
    <GlobalContext.Provider value={{email, setEmail}}>
    <Component {...pageProps} />
    </GlobalContext.Provider>
  )
  
}

export default MyApp
