import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false};
    this.toggleDone = this.toggleDone.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDone(e) {
    e.preventDefault();
    let status = this.props.todo.done ? false : true;

    let newTodo = { id: this.props.todo.id,
      title: this.props.todo.title,
      body: this.props.todo.body };

    newTodo["done"] = status;
    this.props.updateTodo(newTodo);
  }

  toggleDetails(e) {
    let detail = this.state.detail ? false : true;
    this.setState({ detail });
  }

  render() {
    let status = this.props.todo.done ? "Undo" : "Check it off!";
    let details = undefined;

    if (this.state.detail) {
      details = <TodoDetailView todo={this.props.todo} removeTodo={this.props.removeTodo}/>;
    }

    return (
      <li key={this.props.todo.id}>
        <span onClick={this.toggleDetails}>{this.props.todo.title}</span>
        <button onClick={this.toggleDone}>{status}</button>
        {details}
      </li>
    );
  }
}

export default TodoListItem;
