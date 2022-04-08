import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  GET_TODOS,
  UPDATE_TODO,
} from "../constants";

const initialState = {
  todos: [],
  todo: {},
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case ADD_TODO:
      return {
        ...state,
      };
    case DELETE_TODO:
      return {
        ...state,
      };
    case GET_TODO:
      return {
        ...state,
        todo: payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default todoReducer;
