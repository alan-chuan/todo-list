import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/task").then(res =>
      res.json().then(data => setTodos(data))
    );
  }, [todos]);
  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>

      <Form inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
