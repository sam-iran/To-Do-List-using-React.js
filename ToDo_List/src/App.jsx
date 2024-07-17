import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDo from "./components/ToDo";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [inputVal, setInput] = useState("");
  const [todos, setTodo] = useState([]);

  function setInputVal(e) {
    setInput(e.target.value);
  }

  function setTodoList() {
    if (inputVal != "") {
      setTodo((prevTodo) => [...prevTodo, inputVal]);
      setInput("");
      Swal.fire({
        title: "Task Added",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        color: "green",
        width: 400,
      });
    } else {
      Swal.fire({
        title: "Please Enter a Task",
        color: "red",
        width: 400,
      });
    }
  }

  function delTodo(TodoIndex) {
    var delIndex=TodoIndex+1;
    setTodo((prevTodo) =>
      prevTodo.filter((prevTodo, prevTodoIndex) => {
        return prevTodoIndex != TodoIndex;
      })
    );
    Swal.fire({
      title:'Task '+delIndex+' Deleted',
      icon: 'success',
      color: 'crimson'
    })
  }

  return (
    <>
      <div>
        <h3>To Do List</h3>
        <ToDo
          inputVal={inputVal}
          setInputVal={setInputVal}
          setTodoList={setTodoList}
        />
        <ToDoList todos={todos} delTodo={delTodo}/>
      </div>
    </>
  );
}

export default App;
