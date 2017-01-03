import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const fetchTodos = () => dispatch => (
    APIUtil.getTodos()
      .then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  APIUtil.addTodo(todo)
    .then(newTodo => dispatch(receiveTodo(newTodo)))
    .then(dispatch(clearErrors()), err =>
      (dispatch(receiveErrors(err.responseJSON))))
);

export const updateTodo = (todo) => dispatch => (
  APIUtil.changeTodo(todo)
    .then(editedTodo => dispatch(receiveTodo(editedTodo)))
    .then(dispatch(clearErrors()), err =>
      (dispatch(receiveErrors(err.responseJSON))))
);
