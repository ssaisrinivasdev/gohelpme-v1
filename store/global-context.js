import { createContext } from 'react'

const globalContext = createContext({
  regisStatus:"",
  setRegisStatus: () => {}
}
)


export default globalContext