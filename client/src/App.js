import React from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

class App extends React.Component {
  state = { todos: [] }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos: todos })
      })
  }

  addItem = (name) => {
    const item = { name }
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(res => res.json())
      .then(todo => {
        const { todos } = this.state;
        this.setState({ todos: [...todos, todo] })
      })
  }

  updateItem = (id) => {
    // api call to update item
    fetch(`/api/items/${id}`, { method: 'PUT' })
      .then(res => res.json())
      .then(item => {
        const todos = this.state.todos.map(t => {
          if (t.id === id)
            return item
          return t;
        })
        this.setState({ todos: todos })
      })
  }

  deleteItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then(() => {
        const { todos } = this.state;
        this.setState({ todos: todos.filter(t => t.id !== id) })
      })
  }

  todoList = () => {
    return this.state.todos.map(todo => {
      return (
        <div className="row">
          <Todo
            {...todo}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}
          />
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <div>
          <TodoForm addItem={this.addItem} />
          {this.todoList()}
        </div>
      </div>
    );
  }
}

export default App;