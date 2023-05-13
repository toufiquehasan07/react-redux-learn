import { createSlice, createSelector } from "@reduxjs/toolkit";

let lastId = 0;

const bugSlice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
        assignedTo: action.payload.userId,
      });
    },
    bugRemoved: (state, action) => {
      return state.filter((bug) => bug.id !== action.payload.id);
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
  },
});

// selectores with memoization enabled
export const getUnresolvedBugs = createSelector(
  (state) => state.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUserId = (userId) => {
  return createSelector(
    (state) => state.bugs,
    (bugs) => bugs.filter((bug) => bug.assignedTo === userId)
  );
};

export const { bugAdded, bugRemoved, bugResolved } = bugSlice.actions;
export default bugSlice.reducer;
