import { useState } from 'react'
import FirstLesson from './FirstLesson'
import TodoList from "./TodoList"
import "./style.css"

const App = () => {
  // ここにJavaScript
  return (
    // JSX
    <>
      <FirstLesson />
      <TodoList />
    </>
  );
}

export default App;
