import React, { useState } from 'react';
import './Todolist.css'; // Import the CSS file

export default function TodoList() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const deleteTodo = (index) =>{
    const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodos(updatedTodos);
  }
  const addTodo = () => {
    if (value) {
      const newItem = {
        title: value,
        completed: false,
      };
      setTodos([...todos, newItem]);
      setValue('');
    }
  };

  const toggleItem = (e, index) => {
    const completed = e.target.checked;
    const newItems = todos.map((todo, idx) => {
      if (index === idx) {
        return {
          title: todo.title,
          completed: completed,
        };
      }
      return todo;
    });
    setTodos(newItems);
  };

  return (
    <div className="todo-container">
      <h2>Hello I am Todo List</h2>
      <div className="input-container">
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ol>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleItem(e, index)}
              />
              
              <span className={`${todo.completed ? 'strike-through text-red' : ''}`}>
                {todo.title}
              </span>
              <button className='delete' onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}