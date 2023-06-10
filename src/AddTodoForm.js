import React from "react";

export default function AddTodoForm() {
  return (
    <form action="">
      <label htmlFor="todoTitle"></label>
      <input type="text" id="todoTitle" />
      <button type="submit">Add</button>
    </form>
  );
}
