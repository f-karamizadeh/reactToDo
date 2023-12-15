import React, { useState, useEffect } from "react";

function ToDoListv1() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  // const [isActive, setIsActive] = useState(false);

useEffect(() => {
    const storedTasks = localStorage.getItem('TasksList');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

const save = (updatedTasks) => {
    localStorage.setItem('TasksList', JSON.stringify(updatedTasks));
  };
  const handleAddTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { text: newTask, donedata: false }]);
    const updatedTasks = [...tasks, { text: newTask, donedata: false }];
      save(updatedTasks); 
    setNewTask('');
  };
// Delete a task from List of Tasks
  function delTodo(index) {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks([...newTasks]);
    save(newTasks)
  }

  function setStatus(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].donedata = !updatedTasks[index].donedata;
    setTasks(updatedTasks);
  }



  return (
    <div className="mainarea">
      <div className="inputarea">
      <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Neue Aufgabe'
      />
      <button className="newbtn" onClick={handleAddTask}><img src="./icons/plus-solid.svg" alt="New Task" /></button>
      </div>
      <ul className="list">
        {tasks.map((task, index) => (
        <li
        key={index}
        className={task.donedata ? 'done' : ''} // Apply 'done' class if donedata is true
        donedata={task.donedata.toString()}
      >
        <div className="midli">
        <p className="litxt">{task.text}</p>
        <div className="libtns">
        <button className="delbtn" tabIndex={index} onClick={() => delTodo(index)}>
          <img src="./icons/trash-solid.svg" alt="Delete" />
        </button>
        <button className="statusbtn" onClick={() => setStatus(index)}>
          {task.donedata ? 'Undone' : 'Done'}
        </button>
        </div>
        </div>
      </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoListv1;

//Switch between not done/done
  // function setStatus(index) {
  //   console.log('done status:', tasks[index].donedata);
  //   if (tasks[index].donedata == false){
  //     tasks[index].donedata = true;
  //     console.log("Switch to true");  
  //     }else{
  //     tasks[index].donedata = false;
  //     console.log("Switch to false");
  // } 
  // }
// className={task.donedata ? 'done' : 'notdone'}
// onClick={() => setStatus(index)}
//{isActive ? 'activeClass' : 'inactiveClass'}