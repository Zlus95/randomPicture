import { ADD_USER, DELETE_USER, CHANGE_STATUS_USER } from "../types/types";

export const reducerUser = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.payload);

    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload.id);

    case CHANGE_STATUS_USER:
      return state.map((user) => {
        if (user.id === action.payload) {
          return {
            ...user,
            status: !user.status,
          };
        }
        return user;
      });

    default:
      return state;
  }
};
