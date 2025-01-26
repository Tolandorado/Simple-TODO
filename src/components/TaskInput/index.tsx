import React, { useState } from 'react';
import './index.css';

interface Props {
  addTask: (task: string) => void;
}

const TaskInput = ({ addTask }: Props) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='modal'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
        className='taskModal'
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;