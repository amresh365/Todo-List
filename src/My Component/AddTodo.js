import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description Is cannot Be Blank");
    }
    addTodo(title, desc);
  };

  return (
    <div className="container">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Todo Title
          </label>
          <input
            type="sno"
            className="form-control"
            id="exampleInputsno"
            aria-describedby="snoHelp"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-level">
            Todo Desc
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
