import React from 'react'
import { ToDoItem } from "../MyComponents/ToDoItem";
// import {ToDoItem} from "./ToDoItem";   //Both are same!

export const Todos = (props) => {
  // const items = props.todo.map( (item) => {
  //   return (<li>
  // <ToDoItem title={item.title} desc={item.description} />
  //   </li>);
  // });
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {props.todo.length===0? "Yayy! Nothing to display":
      props.todo.map((todo) => {
        return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })}

    </div>
  )
}

