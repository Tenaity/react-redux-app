import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todos() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <input type="checkbox" />
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
