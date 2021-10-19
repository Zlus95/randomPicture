import { ADD_USER, DELETE_USER } from "../types/types";

export const reducerUser = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.payload);

    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload.id);

    default:
      return state;
  }
};
