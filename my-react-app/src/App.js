// App.js
import React, { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import './App.css'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

function App() {

  return (
    <div className="App">
      <NameList/>
    </div>
    
);
}

export default App;
