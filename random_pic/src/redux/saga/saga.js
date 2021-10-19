import { call, put, takeEvery } from "redux-saga/effects";
import {
  ADD_USER_SAGA,
  DELETE_USER_SAGA,
  CHANGE_STATUS_USER_SAGA,
} from "../types/types";
import { fetchUser } from "../api/fetchUser";
import { addUserAC } from "../actionCreators/User/addUserAC";
import { deleteUserAC } from "../actionCreators/User/deleteUserAC";
import { changeStatusUserAC } from "../actionCreators/User/changeStatus";

function* addUserWorker() {
  try {
    const userCall = yield call(fetchUser);
    yield put(addUserAC(userCall));
  } catch (error) {
    yield put({ type: "ОШИБКА ИЗ addUserWorker", message: error.message });
  }
}

function* deleteUserWorker(action) {
  try {
    yield put(deleteUserAC(action.payload));
  } catch (error) {
    yield put({ type: "ОШИБКА ИЗ deleteUserWorker", message: error.message });
  }
}

function* changeStatusWorker(action) {
  try {
    yield put(changeStatusUserAC(action.payload));
  } catch (error) {
    yield put({ type: "ОШИБКА ИЗ changeStatusWorker", message: error.message });
  }
}

export function* WatcherUser() {
  yield takeEvery(ADD_USER_SAGA, addUserWorker);
  yield takeEvery(DELETE_USER_SAGA, deleteUserWorker);
  yield takeEvery(CHANGE_STATUS_USER_SAGA, changeStatusWorker);
}
