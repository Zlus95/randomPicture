import { combineReducers } from "redux";
import { ReducerCat } from "./reducerCat";
import { reducerUser } from "./reducerUser";

export const rootReducer = combineReducers({
  cats: ReducerCat,
  users: reducerUser,
});
