import React, { useState } from 'react';
import './Simple.css'; 

const initialTodosList = [
  { id: 1, title: 'Rent the movie for tomorrow movie night' },
  { id: 2, title: 'Confirm the slot for the yoga session tomorrow morning' },
  { id: 3, title: 'Order fruits on Big Basket' },
  { id: 4, title: 'Confirm my slot for Saturday Night' }
];

const SimpleTodos = () => {
  const [todos, setTodos] = useState(initialTodosList);

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="simple-todos">
      <h1>Simple Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleTodos;
