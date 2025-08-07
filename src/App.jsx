import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('new todo text');

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />

      <p>{newTodo}</p>

      <TodoList />
    </div>
  );
}

export default App;
