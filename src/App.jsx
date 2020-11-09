import { useState } from 'react'
import FirstLesson from './FirstLesson'
import TodoList from "./TodoList"
import Chat from "./Chat"
import ClassComponent from "./Class"
import "./style.css"

const App = () => {
  // ここにJavaScript
  return (
    // JSX
    <>
      <FirstLesson />
      <TodoList />
      <Chat />
      <ClassComponent />
    </>
  );
}

export default App;
