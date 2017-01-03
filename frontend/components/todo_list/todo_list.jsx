import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo, updateTodo}) => {
  return(
    <div>
      <ul className="todolist_items">
        { todos.map( (todo, idx) => <TodoListItem key={idx} todo={todo}
          removeTodo={removeTodo} updateTodo={updateTodo}/>) }
      </ul>

      <TodoForm receiveTodo={receiveTodo}/>
    </div>

  );
};

export default TodoList;
