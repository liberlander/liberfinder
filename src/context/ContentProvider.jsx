'use client'
import { responseContext } from "./responseContext"
import { useState } from "react" 

const ContentProvider  = ({children}) => {
  
  const [visible, setVisible] = useState(false)
  const [response, setResponse] = useState(null)

  return (
    <responseContext.Provider value={{
      visible,
      setVisible,
      response,
      setResponse
    }}>
      {children}
    </responseContext.Provider>
  )
}
export default ContentProvider