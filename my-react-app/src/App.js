// App.js
import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', id: 1 },
    { text: 'Build a Todo App', id: 2 },
  ]);

  const addTodo = (task) => {
    const newTodo = {
      text: task,
      id: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
    
);
}

export default App;
