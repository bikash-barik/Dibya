import React,{useEffect, useState} from 'react';
import AddTask from '../Component/AddTask';
import Header from '../Component/Header';
import Tasks from '../Component/Tasks';

const TaskPage = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([]);
 
useEffect(() => {
  const getTasks = async ()=>{
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
}, [])


//Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data;
  console.log(data);
}

//Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id));

}

//toggle remainder

const toggleRemainder = (id) => {

 setTasks(tasks.map((task) => task.id == id ? {...task,  reminder: !task. reminder} : task))
}

//Add Task
const addtask = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  console.log(task);
}

  return (<div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={!showAddTask}/>
     {showAddTask && <AddTask onAdd={addtask}/>}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> ):( "There is no task To show")}
  
  </div>);
};

export default TaskPage;
