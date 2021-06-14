
import LoginForm from "./components/LoginForm"
import React, { useState, useEffect } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import {Home, Todo} from "./Pages"
import TodoPage from "./TodoPage"
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [id,setId] = useState("")
  const [pw,setPw] = useState("")
  useEffect(() => {
    fetch("http://localhost:5000/task").then(res =>
      res.json().then(data => setTodos(data))
    );
  }, [todos]);
  return (
    <div className="App">
      <header>
        <h1> Todo App</h1>
      </header>
      <Route path="/todo" element={<Todo/>}></Route>
      <LoginForm id={id} setId={setId} pw={pw} setPw={setPw}></LoginForm>
      <Route path="/" element={<Home/>}></Route>
      <TodoPage id={id} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} ></TodoPage>
      
    </div>
  );
}

export default App;
