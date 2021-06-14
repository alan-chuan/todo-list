import React from 'react'
import {Link} from "react-router-dom"

export function Home (){
    return (<div><nav><Link to="TodoPage">Todo Page</Link></nav></div>)

}

export function Todo(){
    return (<div><nav><Link to="Home">Home</Link></nav></div>)
}
