import React from "react";

const TodoListing = ({ todos }) => {
  return (
    <div className="right-panel">
      {todos.map((todo, id) => <TodoItem title={todo.title} date={todo.date} /> )}
    </div>
  );
};

const TodoItem = ({title, date}) => (
    <div className="todo-item">
       <ul>
        <li>
        <h1>{title}</h1>
        <h4>Time: {date}</h4>
        </li>
        </ul>
    </div>
)

export default TodoListing;
