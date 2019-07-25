import React from "react";
import withConnect from "../withConnect";
import Todo from "./Todo";
import {Container} from 'react-bootstrap';

const Todos = ({ todos, removeTodo }) => {
  return (
    <Container>
      {todos.map((todo, index) => {
        return <Todo key={index} id={index} text={todo} removeTodo={removeTodo}/>;
      })}
    </Container>
  );
};

export default withConnect(Todos);