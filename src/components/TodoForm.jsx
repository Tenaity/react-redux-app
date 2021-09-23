import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../store/actions/todoActions";
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
      completed: false,
    });
    setTitle("");
  };
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleOnChange} />
        <input value="Add" type="submit" />
      </form>
    </div>
  );
};
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoForm);
