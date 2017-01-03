import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      Object.keys(action.todos).forEach( key => (
        newState[key] = action.todos[key]
      ));
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

    case UPDATE_TODO:
      let alteredState = merge({}, state);
      alteredState[action.todo.id] = action.todo;
      return alteredState;

    default:
      return state;
  }
};

export default todosReducer;
