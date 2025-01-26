import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList/index.tsx';

test('toggles task completion', () => {
  const toggleTask = jest.fn();
  const tasks = [
    { id: 1, description: 'Task 3', completed: false },
    { id: 2, description: 'Task 4', completed: true },
  ];
  const { getByText } = render(<TaskList tasks={tasks} toggleTask={toggleTask} />);

  const task1 = getByText('Task 3');
  fireEvent.click(task1);

  expect(toggleTask).toHaveBeenCalledWith(1);
});
