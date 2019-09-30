import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div
       /*  className="clickableDiv"
        key={this.props.id} */
      >
        {this.props.task}
        <button onClick={this.props.completedTask}>Complete?</button>
      </div>
    );
  }
}

export default Todo;
