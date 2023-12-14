import React, { useState } from "react";

function ToDoListv1() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { text: newTask, donedata: false }]);
    setNewTask('');
  };

  function delTodo(index) {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks([...newTasks]);
  }

  function setStatus(index) {
    console.log('done status:', tasks[index].donedata);
    if (tasks[index].donedata == false){
      tasks[index].donedata = true;
    }else{
      tasks[index].donedata = false;
  } 
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
        {tasks.map((task, index) => (
          // eslint-disable-next-line react/no-unknown-property
          <li key={index} donedata={task.donedata.toString()}>
            <p>{task.text}</p>
            <button tabIndex={index} onClick={() => delTodo(index)}>
              Remove to do
            </button>
            <button onClick={() => setStatus(index)}>Make done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListv1;