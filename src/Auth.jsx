import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Context } from "./Context"

const Auth = ({ children }) => {
  const { user } = useContext(Context)
  console.log(user)

  return (
    <>
      {user ?
        <>{children}</>
        :
        <Redirect to="/login" />
      }
    </>
  )
  // 普通のif文を使う場合 
  //   if (user) {
  //     return <>{children}</>
  //   } else {
  //     console.log("userがfalseなのでRedirect")
  //     return <Redirect to="/login" />
  //   }
}

export default Auth
