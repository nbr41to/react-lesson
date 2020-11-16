import { useState, useEffect, useContext } from 'react'
import { Context } from '../Context'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

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

  const { user, setUser } = useContext(Context)
  const history = useHistory()

  useEffect(() => {
    if (!user) {
      history.push("/login")
    }
    return () => {
      console.log("コンポーネントが死にました")
    }
  }, [user])

  // console.log(input)
  return (
    <div className="box">
      <h1>Chat App</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setUser(false)}
      >
        ログアウト
      </Button>
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
