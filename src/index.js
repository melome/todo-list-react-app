import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function TaskList() {
  return (
    <ul>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  );
}

function App() {
  const p_style = {
    "marginBottom": "15px"
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>To-do List</h1>
        <p style={p_style}>Simple to-do list react-app</p>
        <TaskList/>
      </header>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById("root"));