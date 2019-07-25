import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from '../redux';
import Todo from "./Todo";
import { Container, Jumbotron } from "react-bootstrap";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  return (
    <>
      <Container>
        <Jumbotron>
          <h1 className="header">Tasks to do:</h1>
          {todos.map((todo, index) => {
            return <Todo key={index} id={index} text={todo} removeTodo={() => dispatch(removeTodo(todo))} />;
          })}
        </Jumbotron>
      </Container>
    </>
  );
};

export default Todos;
