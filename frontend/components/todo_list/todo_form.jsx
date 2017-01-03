import React from 'react';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodo = { id: uniqueId(), title: this.state.todo };
    this.props.receiveTodo(newTodo);
    this.setState( { todo: "" } );
  }

  updateTodo(e) {
    this.setState( { todo: e.target.value } );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.updateTodo} value={this.state.todo}/>
        <button>Add Todo!</button>
      </form>
    );

  }
}

export default TodoForm;
