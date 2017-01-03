export const getTodos = () => (
  $.ajax({ method: 'GET', url: 'api/todos' })
);

export const addTodo = (todo) => (
  $.ajax({ method: 'POST', url: 'api/todos', data: {todo}})
);
