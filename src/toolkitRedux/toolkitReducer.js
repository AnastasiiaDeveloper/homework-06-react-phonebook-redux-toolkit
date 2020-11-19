import { createAction, createReducer } from "@reduxjs/toolkit";
import nextId from "react-id-generator";

export const addContact = createAction("ADD_CONTACT", function prepare(
  text,
  num
) {
  return {
    payload: {
      text,
      num,
    },
  };
});
export const removeContact = createAction("REMOVE_CONTACT", function prepare(
  id
) {
  return {
    payload: { id },
  };
});
export const findContact = createAction("FILTER", function prepare(find) {
  return {
    payload: {
      find,
    },
  };
});

const initialState = {
  contacts: {
    items: JSON.parse(localStorage.getItem("list")) || [],
    filter: "",
  },
};
export default createReducer(initialState, {
  [addContact]: function (state, action) {
    const idGen = nextId();
    const newObjItem = {
      id: idGen + new Date().getMilliseconds(),
      name: action.payload.text,
      num: action.payload.num,
    };
    const newItem = [newObjItem, ...state.contacts.items];
    localStorage.setItem("list", JSON.stringify(newItem));
    state.contacts.items = JSON.parse(localStorage.getItem("list"));
  },
  [removeContact]: function (state, action) {
    let remArr = state.contacts.items.filter(
      ({ id }) => id !== action.payload.id
    );
    localStorage.setItem("list", JSON.stringify(remArr));

    state.contacts.items = remArr;
  },
  [findContact]: function (state, action) {
    state.contacts.filter = action.payload.find;
  },
});
