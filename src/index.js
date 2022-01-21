import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function Task(props) {
  return (
    <li className="tasks-item">{props.taskName}</li>
  );
}

function TaskLists() {
const taskItemList = [
  "Task 1",
  "Task 2",
  "Task 3"
];

  return (
    <div>
      <input className="task-input"/>
      <ul>
        {taskItemList.map((task, index) => {
          return <Task key={index} taskName={task}></Task>;
        })}
      </ul>
    </div>
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