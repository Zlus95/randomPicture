import { SET_STATUS } from "../../types/types";

export const setStatusAC = (id, status) => async (dispatch) => {
  dispatch({
    type: SET_STATUS,
    payload: {
      id,
      status,
    },
  });
};
