import { useState } from "react";
import Task from "./Task"

function TaskList() {
  const taskItemList = [
    "Task 1",
    "Task 2",
    "Task 3"
  ];

  const [taskValue, setTaskValue] = useState("Task N");

  console.log(taskValue)
  
  const inputHandler = (e) => {
    setTaskValue(e.target.value);
  }
  return (
    <div>
      
      <ul>
        <input 
          className="task-input" 
          placeholder="Create new task"
          onChange={inputHandler}/>
        {taskItemList.map((task, index) => {
          return <Task key={index} taskName={task}></Task>;
        })}
      </ul>
    </div>
  );
  }

  export default TaskList;