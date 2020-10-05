import {
  ADD_NEW_ITEM,
  CHECK_BOX_CHANGE,
  INPUT_TEXT_CHANGE,
} from "./TodoListType";

export const addNewItem = () => {
  return {
    type: ADD_NEW_ITEM,
  };
};

export const checkBoxChange = (id) => {
  return {
    type: CHECK_BOX_CHANGE,
    payload: id,
  };
};

export const inputTextChange = (value, id) => {
  const payloadMap = {
    value: value,
    id: id,
  };
  return {
    type: INPUT_TEXT_CHANGE,
    payload: payloadMap,
  };
};
