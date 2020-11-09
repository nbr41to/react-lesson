import { useState } from 'react'

const Chat = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { user: "クロやぎ", text: "こんにちは！" },
    { user: "シロやぎ", text: "こんにちは！" },
  ])
  console.log(messages)
  const users = ["クロやぎ", "シロやぎ"]

  const submitByYou = () => {
    setMessages([...messages, input])
    setInput("")
  }

  const submitByYagi = () => {
    setMessages([...messages, input])
    setInput("")
  }

  console.log(input)
  return (
    <div className="box">
      <h1>Chat App</h1>
      <div>
        {messages.map((message, index) => <p className="message-box" key={index}>[{message.user}]: {message.text}</p>)}
      </div>
      <input value={input} onChange={(event) => setInput(event.target.value)} type="text" />
      <br />
      <button onClick={submitByYou}>あなたで送信</button>
      <button onClick={submitByYagi}>やぎで送信</button>
    </div>
  )
}

export default Chat
