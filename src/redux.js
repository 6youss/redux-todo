import { createStore } from "redux";

const initState = {
  todos: ["Todo 1","Todo 2"]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.text]
      }
    case "REMOVE_TODO":
      let new_todos = [...state.todos];
      new_todos.splice(action.i, 1);
      return {
        ...state,
        todos: new_todos,
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
