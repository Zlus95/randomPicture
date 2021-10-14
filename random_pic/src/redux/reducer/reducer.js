import { ADD_CAT, DELETE_CAT, SET_STATUS } from "../types/types";

export const Reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CAT:
      return state.concat(action.payload);

    case DELETE_CAT:
      return state.filter((del_cat) => del_cat.id !== action.payload.id);

    case SET_STATUS:
      return state.map((pic) => {
        if (pic.id === action.payload.id) return ({...pic, status: !pic.status});
        return pic;
      });

    default:
      return state;
  }
};
