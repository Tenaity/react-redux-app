import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
function Navbar({ todos }) {
  const length = todos.length;
  return (
    <div className="navbar">
      <h1>My Redux Todos App</h1>
      <ul>
        <li>Viec lam 1</li>
        <li>Viec lam 2</li>
        <li>Total: {length}</li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, {})(Navbar);
