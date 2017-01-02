import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions.js"

const initialState = { todos: {} };

const todosReducer = ( state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_TODOS:
    //   return {
    //
    //   };
    // case RECEIVE_TODO:
    //   return {
    //
    //   };
    default:
      return state;
  }
};

export default todosReducer;
