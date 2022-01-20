import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function Task(props) {
  return (
    <li>{props.taskName}</li>
  );
}

function TaskLists() {
  return (
    <ul>
      <Task taskName="Task 1"></Task>
      <Task taskName="Task 2"></Task>
      <Task taskName="Task 3"></Task>
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
        <TaskLists/>
      </header>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById("root"));