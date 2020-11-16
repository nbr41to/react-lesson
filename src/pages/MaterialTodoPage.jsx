import React, { useState } from 'react'
import shortid from "shortid"
import AddTodoBar from "../components/AddTodoBar"
import ItemList from "../components/ItemList"
// Material-UI
import Button from '@material-ui/core/Button'
// import { Button } from '@material-ui/core'


const TodoPage = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (todo === "") {
      alert("Todoを入力してください")
    } else {
      setTodos(
        [
          ...todos,
          { id: shortid.generate(), todo: todo, checked: false }
        ]
      )
    }
  }

  const toggleCheckbox = (id) => {
    setTodos(
      todos.map((task) => {
        if (id === task.id) {
          return { ...task, checked: !task.checked }
        } else {
          return task
        }
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="box">
      <h1>Todo App</h1>
      <div className="box" style={{ width: '300px', margin: "0 auto" }}>
        <AddTodoBar addTodo={addTodo} />
        <ItemList
          todos={todos}
          toggleCheckbox={toggleCheckbox}
          deleteTodo={deleteTodo}
        />
      </div>
    </div >
  )
}

export default TodoPage
