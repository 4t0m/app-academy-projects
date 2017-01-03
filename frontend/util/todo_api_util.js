export const getTodos = () => (
  $.ajax({ method: 'GET', url: 'api/todos' })
);

export const addTodo = (todo) => (
  $.ajax({ method: 'POST', url: 'api/todos', data: {todo}})
);

export const changeTodo = (todo) => (
  $.ajax({ method: 'PATCH', url: `api/todos/${todo.id}`, data: {todo}})
);

export const deleteTodo = (todo) => (
  $.ajax({ method: 'DELETE', url: `api/todos/${todo.id}`, data: {todo}})
);
