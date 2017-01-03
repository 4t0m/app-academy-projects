import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, updateTodo, fetchTodos, createTodo, destroyTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: state.errors
};};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  destroyTodo: todo => dispatch(destroyTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
