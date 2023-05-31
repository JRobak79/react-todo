import React from "react";

let todoList = [
  { id: 1, title: "Finish 1.1" },
  { id: 2, title: "Read Meet the React Component" },
  { id: 3, title: "Read React JSX" },
  { id: 4, title: "Read Lists in React" },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
