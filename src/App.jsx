import { useState, useContext } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import FirstLesson from './pages/FirstLesson'
import SecondLesson from './pages/SecondLesson'
import TodoPage from "./pages/TodoPage"
import ChatPage from "./pages/ChatPage"
import ClassComponent from "./pages/Class"
import AdminPage from "./pages/AdminPage"
import LoginPage from "./pages/LoginPage"
import ContextProvider from "./Context"
import Auth from "./Auth"
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
          <Route exact path='/login' component={LoginPage} />
          <Auth>
            <Switch>
              <Route exact path='/' component={FirstLesson} />
              <Route exact path='/todo' component={TodoPage} />
              <Route exact path='/chat' component={ChatPage} />
              <Route exact path='/class' component={ClassComponent} />
              <Route exact path='/second' component={SecondLesson} />
              <Route exact path='/admin' component={AdminPage} />
            </Switch>
          </Auth>
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
