import { addTodo, removeTodo } from "./redux";
import { connect } from "react-redux";

const mapDispatchToProps = { addTodo, removeTodo };

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default function withConnect( Component ){

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);

}