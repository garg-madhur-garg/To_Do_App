import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoItems from "./ToDoItems";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(        //Take 2 argument
    <div>
        <center>
            <h1>My To Do App</h1>
            {/* <TodoList></TodoList> */}
            <TodoList />
        </center>
    </div>
    ,
    destination
)
