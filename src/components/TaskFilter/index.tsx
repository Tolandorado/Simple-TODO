import React, { useState } from 'react';
import './index.css'

type FilterOption = 'All' | 'Completed' | 'Active';

interface Props {
    onFilterChange: (filter: FilterOption) => void;
}

const TaskFilter = ({ onFilterChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (filter: FilterOption) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
    setIsOpen(false);
  };

  return (
    <div className="task-filter">
      <button onClick={toggleMenu}>
        {selectedFilter}
      </button>
      {isOpen && (
        <div className="popup-menu">
          <button onClick={() => handleFilterChange('All')}>All</button>
          <button onClick={() => handleFilterChange('Completed')}>Completed</button>
          <button onClick={() => handleFilterChange('Active')}>Active</button>
        </div>
      )}
    </div>
  );
};

export default TaskFilter;