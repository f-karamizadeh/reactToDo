import React, { useState } from "react";

function ToDoListv1() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
      if (!newTask) return;
      setTask([...task, newTask]);
      setNewTask('');
    };

//delete function
function delTodo(index){
  let newList = [...task];
  newList.splice(index,1);
  setTask([...newList]);
}

    return (
      <div>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add your new to do'
        />
        <button onClick={handleAddTask}>Add your new to do</button>
        <ul>
          {task.map((task, index) => (
            // <li key={index}>{task}</li>
            <li key={index}>
       <p>
     {task}
     </p>
    {/* <button onClick={editTodo}></button> */}
    <button  index={index} onClick={(e) => delTodo(index)}>Remove to do</button>
    {/* <button onClick= {setStatus}></button> */}
     </li>
          ))}
        </ul>
      </div>
      
  );
}
export default ToDoListv1;
