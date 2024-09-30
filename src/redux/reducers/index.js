import { combineReducers } from "redux";
import album from "./album";
import todos from "./todos";

const reducer = combineReducers({
  album: album,
  todos: todos,
});

export default reducer;
