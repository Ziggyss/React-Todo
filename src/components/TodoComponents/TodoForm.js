import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div className="formContainer">
        <div>
          <input
            value={this.props.newTodo}
            onChange={this.props.onChange}
            type="text"
            placeholder="Enter a task"
          ></input>
        </div>
        <div>
          <button onClick={this.props.addTodo}>Add Todo</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default TodoForm;
