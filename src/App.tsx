import React, { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput/index.tsx'
import TaskList from './components/TaskList/index.tsx'
import TaskFilter from './components/TaskFilter/index.tsx'
import Task, { FilterOption } from './types.ts'

function App() {
  const [filter, setFilter] = useState<FilterOption>('All');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task:string) => {
    const newTask:Task = {
      id: Date.now(),
      description: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task
  ))};

  const clearTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  }

  const completed = tasks.filter((task) => task.completed)
  const active = tasks.filter((task) => !task.completed)
  const activeCount = active.length
  
  const filteredTasks = () => {
    switch (filter) {
      case 'Completed':
        return completed;
      case 'Active':
        return active;
      case 'All':
      default:
        return tasks;
    }
  };

  const handleFilterChange = (newFilter: FilterOption) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <h1>TODOS</h1>
      <div className='header'>
        <TaskInput addTask={addTask}/>
        <TaskFilter onFilterChange={handleFilterChange} />
      </div>
      <h3>Tasks</h3>
      <TaskList tasks={filteredTasks()} toggleTask={toggleTask}/>
      <div className='sheep'>
        <span className='counter'>{activeCount} uncompleted tasks</span>
        <button onClick={clearTasks}>Clear completed</button>
      </div>
    </div>
  )
}

export default App
