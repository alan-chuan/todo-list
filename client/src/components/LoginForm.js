import React from 'react'

const LoginForm = ({username, setUsername, pw, setPw}) =>{
    const inputIdHandler = (e) =>{
        setUsername(e.target.value)
    }
    const inputPwHandler =(e) =>{
        setPw(e.target.value)
    }
    const submitLoginHandler = (e) =>{
        e.preventDefault();
    }
    return(
    <div>
        <header>
        <h1> Login Page </h1>
      </header>
        <form><input type="text" value={username} className="todo-input" onChange={inputIdHandler} placeholder="Enter id"></input>
        <input type="password" value ={pw} className="todo-input" onChange = {inputPwHandler} placeholder="Enter password"/>
        <button className="complete-btn " onClick={submitLoginHandler}>
            Login
        </button>
        </form>
    </div>)
}

export default LoginForm;
