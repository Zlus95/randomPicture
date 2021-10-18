import { ADD_USER, ADD_USER_SAGA } from "../../types/types";

export const addUserAC = (text) => ({
  type: ADD_USER,
  payload: text,
});

export const addUserSagaAC = (text) => ({
  type: ADD_USER_SAGA,
  payload: text,
});
