import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo)=> {
        if (todo.id === id) {
          return({
              ...todo,
              completed: !todo.completed
            });
        } else {
          return(todo);
        }
      })
    });
  }
  handleAdd = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });

  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return(todo.completed === false)
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List:</h1>
          <TodoForm handleAdd={this.handleAdd} />
        </div>
        <TodoList handleClear={this.handleClear} handleToggleComplete={this.handleToggleComplete} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
