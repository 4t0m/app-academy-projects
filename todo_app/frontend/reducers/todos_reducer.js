import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      Object.keys(action.todos).forEach( key => {
        let id = action.todos[key].id;
        newState[id] = action.todos[key];
      });
      return newState;

    case RECEIVE_TODO:
      let updatedState = merge({}, state);
      updatedState[action.todo.id] = action.todo;
      return updatedState;

    case REMOVE_TODO:
      const filteredState = {};
      Object.keys(state).forEach( key => {
        let todo = state[key];
        if (action.todo.id !== todo.id) {
          filteredState[key] = todo;
        }
      });
      return filteredState;

    default:
      return state;
  }
};

export default todosReducer;
