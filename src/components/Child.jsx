import React, { useState } from 'react'

const Child = ({ name, color }) => {
  const [text, setText] = useState("子どもテキスト")
  console.log("子どもがRenderingされました")
  return (
    <div className="box">
      <h2 style={{ color: color }}>Child</h2>
      <p>{name}の子どもです</p>
      <h1>{text}</h1>
      <button onClick={() => setText("変更されました")}>テキストを変更</button>
    </div>
  )
}

export default Child
