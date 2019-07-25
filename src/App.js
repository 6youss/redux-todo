import React from "react";
import ManageTodos from './components/ManageTodos'
import Todos from "./components/Todos";
import './App.css'

function App() {
  return (
    <>
      <Todos />
      <ManageTodos />
    </>
  );
}

export default App;
