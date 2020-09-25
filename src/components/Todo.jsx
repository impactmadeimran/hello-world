import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListing from "./TodoListing";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="todos-wrapper">
      {/* Form */}
      <TodoForm updateTodos={setTodos} />

      {/* Listing */}
      <TodoListing todos={todos} />
    </div>
  );
};

export default Todo;
