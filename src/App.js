import React from "react";
import store, { addTodo, removeTodo } from "./redux";
import { connect } from "react-redux";

class ManageTodos extends React.Component{
  render(){
    return (
      <>
        <button
          onClick={() => {
            this.props.addTodo("adddd");
          }}
        >
          Add todo
        </button>
        <p>Remove</p>
      </>
    );
  }
}

class Todos extends React.Component{
  render(){
    console.log(this.props);
    return (
      <>
        {this.props.todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    addTodo: payload => {
      store.dispatch(addTodo(payload));
    },
    removeTodo: payload => {
      store.dispatch(removeTodo(payload));
    }
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const MTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

const MManageTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageTodos);

class App extends React.Component {
  render() {
    return (
      <>
        <MTodos />
        <MManageTodos />
      </>
    );
  }
}

export default App;
