import React from 'react';
import './Todo.css';

const Todo = ({ todo }) => {
  return (
    <div className='todo-item'>
      <input type="checkbox" />
      <span>{todo.text}</span>
    </div>
  );
};

export default Todo;
