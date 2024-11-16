import { useEffect, useState } from 'react'
import Board from './components/Board'
import Column from './components/Column'
import TaskForm from './components/TaskForm'
import Task from './components/Task'


function App() {
  const [tasks,setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  const addTask = (task)=>{
    setTasks((prevTasks)=>[...prevTasks,task]);
  }

  const moveTask = (id,newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task)=>
        task.id === id ? {...task, status: newStatus} : task
      )
    )
  }

  const removeTask = (id) => {
    setTasks((prevTasks)=> prevTasks.filter((task) => task.id !== id));
  }

  return (
        <div className='container min-h-screen p-4 mx-auto bg-gray-100'>
          <Board>
              <Column title="To do">
                {tasks.filter(task=> task.status ==='todo').map(task=>(
                <Task key={task.id} task={task} moveTask={moveTask} removeTask={removeTask}/>
                ))}
              </Column>
              <Column title="In Progress">
                {tasks.filter(task=> task.status ==='inProgress').map(task=>(
                <Task key={task.id} task={task} moveTask={moveTask} removeTask={removeTask}/>
                ))}
              </Column>
              <Column title="Done">
                {tasks.filter(task=> task.status ==='done').map(task=>(
                <Task key={task.id} task={task} moveTask={moveTask} removeTask={removeTask}/>
                ))}
              </Column>
              <TaskForm addTask={addTask}/>
          </Board>
      </div>
  )
}

export default App
