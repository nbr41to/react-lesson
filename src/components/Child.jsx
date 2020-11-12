import React, { useState, useContext } from 'react'
import { Context } from "../Context"

const Child = ({ name, color }) => {
  const [text, setText] = useState("子どもテキスト")
  const { user, setUser } = useContext(Context)
  console.log("子どもがRenderingされました")
  return (
    <>
      {user ?
        <div className="box">
          <h2 style={{ color: color }}>Child</h2>
          <p>{name}の子どもです</p>
          <h1>{text}</h1>
          <button onClick={() => setText("変更されました")}>テキストを変更</button>
          <button onClick={() => setUser("ログアウトしました")}>Logout</button>
        </div>
        :
        <></>
      }
    </>
  )
}

export default Child
