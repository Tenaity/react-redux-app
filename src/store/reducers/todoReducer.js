const initialState = {
  todos: [],
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: payload,
      };
    case "MARK_COMPLETE":
      console.log(`here ${payload}`);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
    case "ADD_TODO":
      console.log(state);
      return { ...state, todos: [...state.todos, payload] };
    case "DELETE_TODO":
      console.log("delete call");
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default postReducer;
