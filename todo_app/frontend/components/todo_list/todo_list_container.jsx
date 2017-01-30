import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import * as todoActions from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: state.errors
};};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(todoActions.receiveTodo(todo)),
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
  createTodo: todo => dispatch(todoActions.createTodo(todo)),
  updateTodo: todo => dispatch(todoActions.updateTodo(todo)),
  destroyTodo: todo => dispatch(todoActions.destroyTodo(todo)),
  removeTodo: todo => dispatch(todoActions.removeTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
