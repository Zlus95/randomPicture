import { CHANGE_STATUS_USER, CHANGE_STATUS_USER_SAGA } from "../../types/types";

export const changeStatusUserAC = (id, status) => ({
  type: CHANGE_STATUS_USER,
  payload: id,
  status,
});

export const changeStatusUserSagaAC = (id, status) => ({
  type: CHANGE_STATUS_USER_SAGA,
  payload: id,
  status,
});
