import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return(
      <div>
        <ul className="todolist_items">
          { this.props.todos.map( (todo, idx) => <TodoListItem key={idx} todo={todo}
            removeTodo={this.props.removeTodo} updateTodo={this.props.receiveTodo}/>) }
        </ul>

        <TodoForm createTodo={this.props.createTodo}/>
      </div>

    );
  }
}

export default TodoList;
