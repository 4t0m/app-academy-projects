import React from 'react';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateTitle = this.updateTitle.bind(this);
    // this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodo = { id: uniqueId(), title: this.state.title, body: this.state.body };
    newTodo["done"] = false;
    this.props.receiveTodo(newTodo);
    this.setState( { title: "", body: "" } );
  }

  updateTitle(e) {
    this.setState( { title: e.target.value } );
  }

  updateBody(e) {
    this.setState( { body: e.target.value } );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={this.updateTitle.bind(this)} value={this.state.title}/>
        <br/>
      <label>Body</label>
        <input type="text" onChange={this.updateBody.bind(this)} value={this.state.body}/>
        <button>Add Todo!</button>
      </form>
    );

  }
}

export default TodoForm;
