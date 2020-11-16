import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const AddTodoBar = ({ addTodo }) => {
  const [inputText, setInputText] = useState("")
  // console.log("render AddTodoBar")
  console.log(inputText)

  const addAndEmpty = () => {
    addTodo(inputText)
    setInputText("")
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        label="todo"
        variant="outlined"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addAndEmpty}
      >
        追加
      </Button>
    </div>
  )
}

export default AddTodoBar
