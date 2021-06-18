
import LoginForm from "./components/LoginForm"
import React, { useState, useEffect } from "react";
import "./App.css";
import {Route, Link } from "react-router-dom"
import {Switch} from "react-router-dom"
import TodoPage from "./TodoPage"
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("")
  const [pw, setPw] = useState("")
  useEffect(() => {
    fetch("http://localhost:5000/task").then(res =>
      res.json().then(data => setTodos(data))
    );
  }, [todos]);
  return (
    <div className="App">
      <Switch>
        <Route path = "/home">
          <LoginForm username={username} setUsername={setUsername} pw={pw} setPw={setPw}></LoginForm>
        </Route>
        <Route path = "/gg"><TodoPage username={username} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} ></TodoPage> </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
