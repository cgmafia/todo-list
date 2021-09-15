import React from 'react'
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
    };
  }

  addTodo = todo => {
    console.log("add todo")
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };



  deleteTodo = value => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo !== value),
    }));
  };

  


  render() {
    return(
      <div className="App">
        <h1> ToDo App </h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
      );
  }
}

export default App;
