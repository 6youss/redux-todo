import React from "react";
import store, { addTodo, removeTodo } from "./redux";
import { Provider, connect } from "react-redux";

let ManageTodos=(props)=> {
  return (
    <>
      <button onClick={ ()=>{props.addTodo( "adddd" )} }>Add todo</button>
      <p>Remove</p>
    </>
  );
}

let Todos=(props)=> {
  return (
    <>
      {props.todos.map((todo,index) => (
        <p key={index} >{todo}</p>
      ))}
    </>
  );
}

const mapDispatchToProps = ()=> {
  return {
    addTodo: payload => {
      store.dispatch(addTodo(payload));
    },
    removeTodo: payload => {
      store.dispatch(removeTodo(payload));
    }
  };
};

const mapStateToProps  = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

Todos = connect(mapStateToProps,mapDispatchToProps)(Todos);

ManageTodos = connect(mapStateToProps,mapDispatchToProps)(ManageTodos);


class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Todos />
        <ManageTodos />
      </Provider>
    )
  }
}

export default App;
