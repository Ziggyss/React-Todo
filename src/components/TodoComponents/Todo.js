import React from "react";

class Todo extends React.Component {
  render() {
    return <div key={this.props.id}>{this.props.task}</div>;
  }
};

export default Todo;