import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.todo.body}</p>
        <button onClick={this.props.destroyTodo.bind(null, this.props.todo)}>Remove</button>
      </div>
    );
  }
}

export default TodoDetailView;
