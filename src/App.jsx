import { useState } from 'react'
import Textbox from "./Textbox"
import Button from "./Button"
import "./style.css"

const App = () => {
  const name = "nob"
  const popAlert = (text) => {
    alert(text)
  }
  // React Hooks
  const [count, setCount] = useState(0)
  // let count = 0
  // const setCount = () =>{
  const [color, setColor] = useState("aaa")
  //   count = count + 1
  // }

  /**
   * ここからTodoApp
   */
  const [todos, setTodos] = useState(
    [
      { todo: "洗濯", checked: false },
      { todo: "食器洗い", checked: false },
      { todo: "掃除機やる", checked: false },
    ]
  )

  const [inputText, setInputText] = useState("")

  const addTodo = (todo) => {
    setTodos(
      [
        ...todos,
        { todo: todo, checked: false }
      ]
    )
    setInputText("")
  }

  console.log(inputText)

  return (
    // JSX
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={() => addTodo(inputText)}>保存</button>

      <ul style={{ listStyle: 'none' }}>
        {todos.map((task) => {
          return (
            <li>
              <input
                type="checkbox"
                checked={task.checked}
              />
              {task.todo}
            </li>
          )
        })}
      </ul>



      {/* <h1 className="title">初めてのReactだ！</h1>
      <p>講師の{name}です.よろしくお願いします.</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        いいね！({count})
      </button>
      <Textbox
        text="TEXT BOX"
        color="black"
        bgColor={color}
      />
      <div style={{ textAlign: 'center' }}>
        <Button
          whatColor="red"
          setColor={setColor}
        />
        <Button
          whatColor="orange"
          setColor={setColor}
        />
        <Button
          whatColor="green"
          setColor={setColor}
        />
      </div> */}
    </div>
  );
}

export default App;
