import { createStore } from "redux";

const initState = {
  todos: ["test1","test2"]
};

const reducer = (state = initState, action) => {
  let new_state = { ...state };
  switch (action.type) {
    case "ADD_TODO":
      new_state.todos.push(action.text);
      return new_state;
    case "REMOVE_TODO":
      new_state.todos.slice(action.i, 1);
      return new_state;
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
