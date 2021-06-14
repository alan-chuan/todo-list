import React from 'react'

const LoginForm = ({id, setId, pw, setPw}) =>{
    const inputIdHandler = (e) =>{
        setId(e.target.value)
    }
    const inputPwHandler =(e) =>{
        setPw(e.target.value)
    }
    const submitLoginHandler = (e) =>{
        e.preventDefault();
    }
    return(<div>
        <form><input type="text" value={id} className="todo-input" onChange={inputIdHandler} placeholder="Enter id"></input>
        <input type="password" value ={pw} className="todo-input" onChange = {inputPwHandler} placeholder="Enter password"/>
        <button className="complete-btn " onClick={submitLoginHandler}>
            Login
        </button>
        </form>
    </div>)
}

export default LoginForm;
