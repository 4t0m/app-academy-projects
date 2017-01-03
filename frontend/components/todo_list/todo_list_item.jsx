import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false};
    this.toggleDone = this.toggleDone.bind(this);
  }

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
    let details = undefined;

    if (this.state.detail) {
      details = <TodoDetailView todo={this.props.todo} removeTodo={this.props.removeTodo}/>;
    }

    return (
      <li key={this.props.todo.id}>
        {this.props.todo.title}
        <button onClick={this.toggleDone.bind(this)}>{status}</button>
        {details}
      </li>
    );
  }
}

export default TodoListItem;
