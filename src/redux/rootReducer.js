import { combineReducers } from "redux";
import todoListReducer from "./todoList/TodoListReducer";

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

export default rootReducer;
