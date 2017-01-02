import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({todos}) => {
  console.log(todos);
  return(
    <ul className="todolist_items">
      { todos.map( todo => <TodoListItem todo={todo}/>) }
    </ul>
  );
};

export default TodoList;
