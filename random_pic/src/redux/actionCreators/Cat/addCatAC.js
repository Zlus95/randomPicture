import { ADD_CAT } from "../../types/types";

export const addCatAC = () => async (dispatch) => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=full"
  );
  const result = await response.json();
  if (result) {
    result[0].status = false;
    dispatch({
      type: ADD_CAT,
      payload: result,
    });
  }
};
