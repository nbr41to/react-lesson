import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import { useHistory } from "react-router-dom"

const LoginPage = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState()
  const { setUser } = useContext(Context)
  const history = useHistory()

  const loginCheck = () => {
    // ログイン成功用のIDとPassを設定
    const userInfo = { id: "nob1234", password: "a12345" }
    if (id === userInfo.id && password === userInfo.password) {
      // IDとPassが一致したときの処理
      setUser(true)
      history.push("/")
    } else {
      // IDとPassが一致しなかったときの処理
      setMessage("ログインに失敗しました")
    }
  }


  return (
    <div className="box">
      <h1>Login page</h1>
      <div className="box">
        <p>ID</p>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <br />
        <p>PASSWORD</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={loginCheck}>ログイン</button>
        {message && <p style={{ color: "red" }}>{message}</p>}
      </div>
    </div>
  )
}

export default LoginPage
