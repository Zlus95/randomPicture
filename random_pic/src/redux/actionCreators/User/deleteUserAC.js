import { DELETE_USER, DELETE_USER_SAGA } from "../../types/types";

export const deleteUserAC = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const deleteUserSagaAC = (id) => ({
  type: DELETE_USER_SAGA,
  payload: id,
});
