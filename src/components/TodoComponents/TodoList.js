// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todoList } = props;
  return (
  <div>
      {todoList.map(task => {
    return <Todo key={todoList.id} task={todoList.task} />
      })}
    </div>
  );
}
