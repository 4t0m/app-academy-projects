import React from 'react';

class TodoListItem extends React.Component {

  toggleDone(e) {
    console.log(this.props);
    e.preventDefault();
    let status = this.props.todo.done ? false : true;

    let newTodo = { id: this.props.todo.id,
      title: this.props.todo.title,
      body: this.props.todo.body };

    newTodo["done"] = status;
    this.props.updateTodo(newTodo);
  }
  render() {
    let status = this.props.todo.done ? "Undo" : "Check it off!";

    return (
      <li key={this.props.todo.id}>
        {this.props.todo.title}
        <button onClick={this.props.removeTodo.bind(null, this.props.todo)}>Remove</button>
        <button onClick={this.toggleDone.bind(this)}>{status}</button>
      </li>
    );
  }
}

export default TodoListItem;
