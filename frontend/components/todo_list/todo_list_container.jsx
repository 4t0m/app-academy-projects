import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo, updateTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
// REMOVE UPDATETODO IN ABOVE LINE

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
};};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  // updateTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
