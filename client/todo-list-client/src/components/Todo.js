import React from "react";

const Todo = ({ todo, setTodos }) => {
  const deleteHandler = () => {
    fetch("http://localhost:5000/task/" + todo.id, { method: "DELETE" });
  };
  return (
    <div className="todo">
      <li className="todo-item">
        {todo.task}

        <button className="complete-btn " onClick={deleteHandler}>
          <i className="fas fa-check"></i>
        </button>
      </li>
    </div>
  );
};

export default Todo;
