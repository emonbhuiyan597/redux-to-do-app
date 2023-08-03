import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions/todos';
import './App.css';



const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};




const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const AddTodo = () => {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new todo item" />
      <button type="submit">Add</button>
    </form>
  );
};