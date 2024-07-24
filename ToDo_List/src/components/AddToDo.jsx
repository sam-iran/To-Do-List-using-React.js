import React from "react";

function AddToDo({todos,index,delTodo}) {
  const date=new Date().toLocaleDateString()

  return (
    <div className="info">
        <p>{index+1}. {todos} - {date}</p>
        <button onClick={()=>delTodo(index)}>Delete</button>
    </div>
  );
}

export default AddToDo;