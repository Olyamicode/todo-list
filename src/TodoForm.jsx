import { useRef, useState } from 'react';
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
      <label htmlFor="todoTitle">Todo</label>
      <input 
       type="text" 
       id="todoTitle" 
       name="title" 
       ref={todoTitleInput} 
       value={workingTodoTitle}
       onChange={(event) => setWorkingTodoTitle(event.target.value)} 
      />
      <button >Add Todo</button>
    </form>
  );
}

export default TodoForm;
