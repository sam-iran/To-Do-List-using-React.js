import React from "react";

function ToDo({ inputVal, setInputVal, setTodoList }) {

  return (
    <div className="input_container">
      <input
        type="text"
        value={inputVal}
        onChange={setInputVal}
        placeholder="Enter a Task"
      ></input>
      <button onClick={setTodoList}>Add</button>
    </div>
  );
}

export default ToDo;
