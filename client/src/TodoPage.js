import React from 'react'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";



export default function TodoPage({username, inputText, setInputText, todos, setTodos}){
    return(<div>
        <header><h1>Todo Page</h1></header>
        <TodoForm username={username} inputText={inputText} setInputText={setInputText} />
        <TodoList username={username} todos={todos} setTodos={setTodos} /></div>)
}