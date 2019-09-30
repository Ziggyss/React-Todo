import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      newToDo: ""
    };
  }

  onChange = event => {
    this.setState({
      newToDo: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const addedTodo = {
      completed: false,
      id: Date.now(),
      task: this.state.newToDo,
    };
    this.setState({
      todoList: this.state.todoList.concat(addedTodo),
      newToDo: "",
    });
    console.log(this.state.todoList);
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: [],
      newToDo: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h1>To Do List</h1>
          <TodoList todoList={this.state.todoList} />
          <TodoForm
            newToDo={this.newToDo}
            onChange={this.onChange}
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
