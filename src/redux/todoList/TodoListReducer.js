import {
  ADD_NEW_ITEM,
  CHECK_BOX_CHANGE,
  INPUT_TEXT_CHANGE,
} from "./TodoListType";

const initialState = {
  items: [],
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      const length = state.items.length;
      const item = {
        id: length,
        text: "",
        isChecked: false,
      };
      const newStateAddItem = [...state.items, item];
      return {
        ...state,
        items: newStateAddItem,
      };
    case CHECK_BOX_CHANGE:
      const checkBoxUpdate = state.items.map((item) => {
        if (item.id === action.payload) {
          const updatedItem = {
            ...item,
            isChecked: !item.isChecked,
          };
          return updatedItem;
        }
        return item;
      });
      return {
        ...state,
        items: checkBoxUpdate,
      };
    case INPUT_TEXT_CHANGE:
      const inputUpdate = state.items.map((item) => {
        if (item.id === action.payload.id) {
          const updatedItem = {
            ...item,
            text: action.payload.value,
          };
          return updatedItem;
        }
        return item;
      });
      console.log("inputTextChange", action.payload);
      return {
        ...state,
        items: inputUpdate,
      };
    default:
      return state;
  }
};

export default todoListReducer;
