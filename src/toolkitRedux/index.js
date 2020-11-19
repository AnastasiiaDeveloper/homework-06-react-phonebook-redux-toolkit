import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";

const rootReducers = combineReducers({
  toolkit: toolkitReducer,
});
export const store = configureStore({
  reducer: rootReducers,
});
