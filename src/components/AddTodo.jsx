import React, { useState } from "react";

//Function add to do!!!!!
function AddToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const handleAddTask = () => {
      if (!newTask) return;
      setTasks([...tasks, newTask]);
      setNewTask('');
    };

    return (
      <div>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add your new to do'
        />
        <button onClick={handleAddTask}>New to do</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      
  );
}

export default AddToDo;








