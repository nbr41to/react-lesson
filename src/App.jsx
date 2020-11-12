import { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import FirstLesson from './FirstLesson'
import SecondLesson from './SecondLesson'
import TodoList from "./TodoList"
import Chat from "./Chat"
import ClassComponent from "./Class"
import AdminPage from "./AdminPage"
import ContextProvider from "./Context"
import "./style.css"

const App = () => {
  // ここにJavaScript
  return (
    // JSX
    <BrowserRouter>
      <ContextProvider>
        <h1>TOP PAGE</h1>
        <Link className="box" to="/">FirstLesson</Link>
        <Link className="box" to="/todo">TodoApp</Link>
        <Link className="box" to="/chat">ChatApp</Link>
        <Link className="box" to="/class">ClassComponent</Link>
        <Link className="box" to="/second">SecondLesson</Link>
        <Link className="box" to="/admin">ログインページ</Link>
        <Switch>
          <Route exact path='/' component={FirstLesson} />
          <Route exact path='/todo' component={TodoList} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/class' component={ClassComponent} />
          <Route exact path='/second' component={SecondLesson} />
          <Route exact path='/admin' component={AdminPage} />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
