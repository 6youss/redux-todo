import React from "react";
import withConnect from "../withConnect";
import Todo from "./Todo";
import { Container, Jumbotron } from "react-bootstrap";

const Todos = ({ todos, removeTodo }) => {
  return (
    <>
      <Container>
        <Jumbotron>
          <h1 className="header">Tasks to do:</h1>
          {todos.map((todo, index) => {
            return <Todo key={index} id={index} text={todo} removeTodo={removeTodo} />;
          })}
        </Jumbotron>
      </Container>
    </>
  );
};

export default withConnect(Todos);
