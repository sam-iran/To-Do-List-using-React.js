import React from "react";
import AddToDo from "./AddToDo";

function ToDoList({todos,delTodo}) {
  return (
    <div className="list_container">
      {todos.map((todo,index)=>{
        return(<AddToDo todos={todo} index={index} delTodo={delTodo}/>)
      })}
    </div>
  )
}

export default ToDoList;
