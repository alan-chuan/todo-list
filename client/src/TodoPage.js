import React from 'react'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
export default function TodoPage({inputText, setInputText, todos, setTodos}){
    return(<div><TodoForm inputText={inputText} setInputText={setInputText} />
        <TodoList todos={todos} setTodos={setTodos} /></div>)
}