import logo from "./logo.svg";
import "./App.css";
import "./My Component/Header";
import Header from "./My Component/Header";
import Todos from "./My Component/Todos";
import Footer from "./My Component/Footer";
import { useState } from "react";
import AddTodo from "./My Component/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("i am addindg this tod", title, desc);
    let sno = [todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let [todos, setTodos] = useState([initTodo]);

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
