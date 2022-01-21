import Task from "./Task"

function TaskList() {
  const taskItemList = [
    "Task 1",
    "Task 2",
    "Task 3"
  ];
  
  return (
    <div>      
      <ul>
        {taskItemList.map((task, index) => {
          return <Task key={index} taskName={task}></Task>;
        })}
      </ul>
    </div>
  );
  }

  export default TaskList;