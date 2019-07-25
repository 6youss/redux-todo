import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Button, Form, Container } from "react-bootstrap";
import { addTodo } from '../redux';
const ManageTodos = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }
  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  }
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Enter Todo</Form.Label>
          <Form.Control rows="4" cols="50" onChange={handleChange} value={newTodo}/>
        </Form.Group>
        <Button onClick={handleAddTodo}>Add todo</Button>
      </Form>
    </Container>
  );
};

export default ManageTodos;
