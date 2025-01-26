import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App'; 
import '@testing-library/jest-dom'; 

test('adds a new task', () => {
  const { getByPlaceholderText, getAllByText } = render(<App />);

  const input = getByPlaceholderText('New task');
  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.click(getAllByText('Add Task')[0]);

  expect(getAllByText('New task')[0]).toBeInTheDocument();
});
