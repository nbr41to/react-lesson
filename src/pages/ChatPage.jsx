import { useState } from 'react'

const ChatPage = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { user: "クロやぎ", text: "こんにちは！" },
    { user: "シロやぎ", text: "こんにちは！" },
  ])

  const submitByKuro = () => {
    setMessages([...messages, { user: "クロやぎ", text: input }])
    setInput("")
  }

  const submitBySiro = () => {
    setMessages([...messages, { user: "シロやぎ", text: input }])
    setInput("")
  }

  console.log(input)
  return (
    <div className="box">
      <h1>Chat App</h1>
      <a href="about.index">リンク</a>
      <div>
        {messages.map((message, index) =>
          <p
            className={message.user === "クロやぎ" ? "message-box-kuro" : "message-box-siro"}
            key={index}
          >
            [{message.user}]: {message.text}
          </p>
        )}
      </div>
      <input value={input} onChange={(event) => setInput(event.target.value)} type="text" />
      <br />
      <button onClick={submitByKuro}>クロやぎで送信</button>
      <button onClick={submitBySiro}>シロやぎで送信</button>
    </div>
  )
}

export default ChatPage
