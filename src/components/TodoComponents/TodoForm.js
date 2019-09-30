import React from "react";

function TodoForm({ onChange, addTodo, clearCompleted, newTodo }) {
  return (
    <div className="formContainer">
      <div>
        <input
          value={newTodo}
          onChange={onChange}
          type="text"
          placeholder="Enter a task"
        ></input>
      </div>
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoForm;
