import React from "react";

function AddToDo({todos,index,delTodo}) {
  return (
    <div className="info">
        <p>{index+1}. {todos}</p>
        <button onClick={()=>delTodo(index)}>Delete</button>
    </div>
  );
}

export default AddToDo;