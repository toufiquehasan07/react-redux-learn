import { createAction, createReducer } from "@reduxjs/toolkit";

let lastId = 0;

/* define reducer */
const bugReducer = createReducer([], {
  bugCreated: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  bugRemoved: (state, action) => {
    return state.filter((bug) => bug.id !== action.payload.id);
  },
  bugResolved: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
});

/* define action creators */
export const bugAdded = createAction("bugCreated");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

export default bugReducer;
