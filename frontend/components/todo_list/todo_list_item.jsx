import React from 'react';

class TodoListItem extends React.Component {

  toggleDone(e) {
    e.preventDefault();
    
  }
  render() {
    return (
      <li key={this.props.todo.id}>
        {this.props.todo.title}
        <button onClick={this.props.removeTodo.bind(null, this.props.todo)}>Remove</button>

      </li>
    );
  }
}

export default TodoListItem;
