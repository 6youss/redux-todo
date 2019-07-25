import React, { useState } from "react";
import withConnect from "../withConnect";
import { Button, Form, Container } from "react-bootstrap";

const ManageTodos = props => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = props;
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Enter Todo</Form.Label>
          <Form.Control rows="4" cols="50" onChange={e => setNewTodo(e.target.value)} />
        </Form.Group>
        <Button onClick={() => addTodo(newTodo)}>Add todo</Button>
      </Form>
    </Container>
  );
};

export default withConnect(ManageTodos);
