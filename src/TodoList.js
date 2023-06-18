import React from "react";

let todoList = [
  { id: 1, title: "Finish 1.1" },
  { id: 2, title: "Read Meet the React Component" },
  { id: 3, title: "Read React JSX" },
  { id: 4, title: "Read Lists in React" },
  { id: 5, title: "Read Alpha Male Bible" },
];

export default function TodoList() {
  return (
    <ul>
      {todoList.map((el) => {
        return <li key={el.id}>{el.title}</li>;
      })}
    </ul>
  );
}
