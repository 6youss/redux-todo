import React from "react";
import { Card } from "react-bootstrap";
const Todo = ({ id, text, removeTodo }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Card.Link
          href="#"
          onClick={() => {
            removeTodo(id);
          }}
        >
          Remove
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Todo;
