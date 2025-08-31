import { useRef, useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef(null);

  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();

    const title = workingTodoTitle.trim();
    if (!title) return;

    onAddTodo(title);

    setWorkingTodoTitle('');
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
       elementId= "todoTitle"
       labelText= "Todo"
       ref={todoTitleInput} 
       value={workingTodoTitle}
       onChange={(event) => setWorkingTodoTitle(event.target.value)} 
      />
      <button >Add Todo</button>
    </form>
  );
}

export default TodoForm;
