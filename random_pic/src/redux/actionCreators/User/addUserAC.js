import { ADD_USER, ADD_USER_SAGA } from "../../types/types";

export const addUserAC = (url) => ({
  type: ADD_USER,
  payload: url,
});

export const addUserSagaAC = (url) => ({
  type: ADD_USER_SAGA,
  payload: url,
});
