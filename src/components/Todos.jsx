import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import {
  deleteTodo,
  markComplete,
  getTodo,
} from "../store/actions/todoActions";

function Todos({ todos, markComplete, deleteTodo, getTodo }) {
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}{" "}
            <input
              type="checkbox"
              onChange={markComplete.bind(this, todo.id)}
              checked={todo.completed}
            />
            <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { markComplete, deleteTodo, getTodo })(
  Todos
);
