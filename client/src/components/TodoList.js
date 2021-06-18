import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, username }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo todo={todo} setTodos={setTodos} username={username}></Todo>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
