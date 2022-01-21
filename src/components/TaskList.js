import { useState } from "react";
import Task from "./Task"

function TaskList() {
  const [taskItemList, setTaskItemList] = useState([
    "Task 1",
    "Task 2",
    "Task 3"
  ]);

  const [taskValue, setTaskValue] = useState("");

  // console.log(taskValue)
  
  const inputHandler = (e) => {
    setTaskValue(e.target.value);
  }

  const addTaskHandler = () => {
    setTaskItemList([...taskItemList, taskValue]); //spread enumerator: spreaad values in an array
    setTaskValue("");
  };

  return (
    <div>
      
      <ul>
        <input 
          className="task-input" 
          placeholder="Create new task"
          onChange={inputHandler}
          onBlur={addTaskHandler}
          value={taskValue}
        />

        {taskItemList.map((task, index) => {
          return <Task key={index} taskName={task}></Task>;
        })}
      </ul>
    </div>
  );
  }

  export default TaskList;