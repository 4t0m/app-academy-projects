import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodo = { title: this.state.title, body: this.state.body, done: false };

    this.props.createTodo(newTodo).then(
      () => this.setState({ title: "", body: "" })
    );
  }

  updateTitle(e) {
    this.setState( { title: e.target.value } );
  }

  updateBody(e) {
    this.setState( { body: e.target.value } );
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" onChange={this.updateTitle.bind(this)} value={this.state.title}/>
          <br/>
          <label>Body</label>
          <input type="text" onChange={this.updateBody.bind(this)} value={this.state.body}/>
          <button>Add Todo!</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
