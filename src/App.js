import React from "react";
import store, { addTodo, removeTodo } from "./redux";
import { Provider, connect } from "react-redux";

const ManageTodos= (props)=> {
  const { addTodo, removeTodo } = props;
  return (
    <>
      <button onClick={() => addTodo( "adddd" )}>Add todo</button>
      <button onClick={() => removeTodo(1)}>Remove</button>
    </>
  );
}

const Todos=(props)=> {
  return (
    <>
      {props.todos.map((todo,index) => (
        <p key={index}>{todo}</p>
      ))}
    </>
  );
}

const mapDispatchToProps = { addTodo, removeTodo }

const mapStateToProps  = state => {
  return {
    todos: state.todos
  };
};

const ConnectedTodos = connect(mapStateToProps)(Todos);

const ConnectedManageTodos = connect(null, mapDispatchToProps)(ManageTodos);


function App() {
    return (
      <Provider store={store}>
        <ConnectedTodos />
        <ConnectedManageTodos />
      </Provider>
    )
}

export default App;
