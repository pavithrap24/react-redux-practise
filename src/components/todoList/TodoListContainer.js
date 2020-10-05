import React from "react";
import TodoContainer from "./TodoContainer";
import { useSelector, useDispatch } from "react-redux";
import { addNewItem, checkBoxChange, inputTextChange } from "../../redux";

function TodoListContainer() {
  const items = useSelector((state) => state.todoList.items);
  const dispatch = useDispatch();

  function addNewItemOnClick() {
    dispatch(addNewItem());
  }

  function checkboxChangeEvent(id) {
    dispatch(checkBoxChange(id));
  }

  function inputChangeEvent(event, id) {
    dispatch(inputTextChange(event.target.value, id));
  }

  function TodoList({ items }) {
    return items.map((item) => (
      <TodoContainer
        key={item.id}
        keyValue={item.id}
        checkboxChange={checkboxChangeEvent}
        checked={item.isChecked}
        text={item.text}
        inputChange={inputChangeEvent}
      />
    ));
  }
  return (
    <div>
      <button onClick={addNewItemOnClick}>Add New Item</button>
      <TodoList items={items} />
    </div>
  );
}

export default TodoListContainer;
