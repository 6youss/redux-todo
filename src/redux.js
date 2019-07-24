import { createStore } from "redux";

const initState = {
  todos: ["test1","test2"]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.text]
      }
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.slice(action.i, 1),
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

export function addTodo(text) {
  return {
    type: "ADD_TODO",
    text
  };
}

export function removeTodo(i) {
  return {
    type: "REMOVE_TODO",
    i
  };
}
