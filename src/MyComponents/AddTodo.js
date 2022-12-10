import React from 'react'
import { useState } from "react";
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const submit = (e) => {
        e.preventDefault();  //page won't refresh on submit
        if(!title||!description){
            alert("Both title and description are required")
        }
        addTodo(title,description);
    }
    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <h3>Add a to do...</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To do title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">To do description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }}
                        className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sn btn-success">Add todo</button>
            </form>
        </div>
    )
}
