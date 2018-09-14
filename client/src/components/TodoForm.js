import React from 'react';

class TodoForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addItem(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Add A Todo'
          required
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default TodoForm;