import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskFilter from '../components/TaskFilter/index.tsx';
import '@testing-library/jest-dom'; // Импортируем для использования toBeInTheDocument

test('renders TaskFilter and changes filter', () => {
  const onFilterChange = jest.fn();
  const { getByText } = render(<TaskFilter onFilterChange={onFilterChange} />);

  // Проверяем, что по умолчанию отображается фильтр "All"
  expect(getByText('All')).toBeInTheDocument();

  // Открываем меню фильтров
  fireEvent.click(getByText('All'));

  // Меняем фильтр на "Completed"
  fireEvent.click(getByText('Completed'));

  // Проверяем, что функция onFilterChange была вызвана с правильным аргументом
  expect(onFilterChange).toHaveBeenCalledWith('Completed');

  // Открываем меню фильтров снова
  fireEvent.click(getByText('Completed'));

  // Меняем фильтр на "Active"
  fireEvent.click(getByText('Active'));

  // Проверяем, что функция onFilterChange была вызвана с правильным аргументом
  expect(onFilterChange).toHaveBeenCalledWith('Active');
});
