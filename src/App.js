import "./App.css";
import Header from "./MyComponents/Header";
// import {ToDoItem} from "./MyComponents/ToDoItem";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("onDelete triggered for todo", todo);
    // Deleting this way won't work
    // let index=todoss.indexof(todo);
    // todoss.splice(index,1);
    setTodos(
      todoss.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, description) => {
    console.log("Adding this new to do ", title, ", ", description);
    let sno = todoss[todoss.length - 1].sno + 1;
    const newTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodos([...todoss, newTodo]);
    console.log(newTodo);
  };
  const [todoss, setTodos] = useState([
    {
      sno: 1,
      title: "Visit market",
      description: "Go to the market to buy groceries",
    },
    {
      sno: 2,
      title: "Study",
      description: "Read about DS-trees",
    },
    {
      sno: 3,
      title: "Food",
      description: "Prepare food",
    },
    {
      sno: 4,
      title: "Alarm",
      description: "Set alarm for tommorow's work",
    },
  ]);
  return (
    <>
      <Header title="To Do's List" />
      <AddTodo addTodo={addTodo} />
      <Todos todo={todoss} onDelete={onDelete} />
      <Footer />
    </>
  );
}
export default App;
