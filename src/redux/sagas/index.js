import { all } from "redux-saga/effects";
import album from "./album";
import todos from "./todos";

export default function* rootSaga() {
  yield all([album(), todos()]);
}
