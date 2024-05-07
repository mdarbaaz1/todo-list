import React from 'react'
import Todoitem from './Todoitem'

export default function todos(props) {
  
  return (
    <div className="container" >
            <h3 className= "text-center my-3">Todos List</h3>
            {props.todos.length==0 ? "No Todos to display": 
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })}
              
        </div>
  )
}
