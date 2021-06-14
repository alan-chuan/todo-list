import React from "react";
const Form = ({ inputText, setInputText }) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault(); //prevent default behavior of refreshing page
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: inputText, completed: false })
    });
    console.log(inputText);
    setInputText("");
  };
  return (
    <form>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        placeholder="Enter text"
        onChange={inputTextHandler}
      />
      <button className="todo-button" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
