import { DELETE_CAT } from "../../types/types";

export const DeleteCatAC = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CAT,
    payload: {
      id,
    },
  });
};
