// TodoForm.js
import React, { useState } from 'react';
import './TodoForm.css'

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form className="todo-form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-form-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="todo-form-button">
        +
      </button>
    </form>
  );
};

export default TodoForm;
