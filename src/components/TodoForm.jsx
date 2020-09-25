import React, { useState } from "react";

const TodoForm = ({ updateTodos }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const addTodo = () => {
    if (!todo || !date) {
      alert("Please Fill all inputs of the form");
      return
    }

    updateTodos((prev) => [
      ...prev,
      {
        title: todo,
        date,
      },
    ]);
  };

  return (
    
    <div className="left-panel">
      <form>
        <div className="form-group">
          <label htmlFor="">Title:</label>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="todo-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Time</label>
          <input
            type="time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="todo-input"
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="">Title</label> */}
          <input
            type="button"
            value="Submit"
            onClick={addTodo}
            className="todo-input todo-input-button"
          />
        
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
