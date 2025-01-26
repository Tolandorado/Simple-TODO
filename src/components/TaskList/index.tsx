import React from 'react';
import Task from '../../types.ts';

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const TaskList = ({ tasks, toggleTask }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li 
          key={task.id}
          onClick={() => toggleTask(task.id)}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          <span>{task.description}</span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
