import React from "react";

export default function AddTodoForm(props) {
  function handleAddTodo(e) {
    e.preventDefault();
    let todoTitle = e.target.title.value;
    props.onAddTodo(todoTitle);
    e.target.reset();
  }
  return (
    <form action="" onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"></label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}
