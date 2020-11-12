import React, { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState(
    [
      { todo: "洗濯", checked: false },
      { todo: "食器洗い", checked: false },
      { todo: "掃除機やる", checked: false },
    ]
  )
  const [inputText, setInputText] = useState("")

  const addTodo = (todo) => {
    if (inputText === "") {
      alert("Todoを入力してください")
    } else {
      setTodos(
        [
          ...todos,
          { todo: todo, checked: false }
        ]
      )
      setInputText("")
    }
  }

  const ToggleCheckbox = (i) => {
    console.log(`${i + 1}番目のCheckedを切り替えます！`)
    // const newTodos = todos
    // newTodos[i].checked = !newTodos[i].checked
    // console.log(newTodos)
    // setTodos(newTodos)

    setTodos(
      todos.map((task, index) => {
        if (i === index) {
          return { todo: task.todo, checked: !task.checked }
        } else {
          return { todo: task.todo, checked: task.checked }
        }
      })
    )
  }



  const deleteTodo = (i) => {
    setTodos(
      todos.filter((_, index) => i !== index)
    )
  }

  return (
    <div className="box">
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={() => addTodo(inputText)}>追加</button>

      <ul style={{ listStyle: 'none' }}>
        {todos.map((task, index) => {
          return (
            <li key={index} className="todo-list">
              {/* <li key={index} className={`${task.checked ? 'checked' : ''}`}> */}
              <input
                type="checkbox"
                checked={task.checked}
                onClick={() => ToggleCheckbox(index)}
              />
              <span>{task.todo}</span>
              <button onClick={() => deleteTodo(index)} >×</button>
            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default TodoList
