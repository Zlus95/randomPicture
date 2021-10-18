import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_USER_SAGA } from "../types/types";
import { fetchUser } from "../api/fetchUser";
import { addUserAC } from "../actionCreators/User/addUserAC";

function* addUserWorker() {
  try {
    console.log("111");
    const dogCall = yield call(fetchUser);
    console.log("2222", dogCall);
    yield put(addUserAC(dogCall));
    console.log("3333");
  } catch (error) {
    yield put({ type: "ОШИБКА ИЗ addDogWorker", message: error.message });
  }
}

export function* WatcherUser() {
  yield takeEvery(ADD_USER_SAGA, addUserWorker);
}
