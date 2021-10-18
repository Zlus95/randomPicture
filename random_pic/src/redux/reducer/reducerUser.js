import { ADD_USER } from "../types/types";

export const reducerUser = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.payload);

    default:
      return state;
  }
};
