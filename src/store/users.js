import { createSlice } from "@reduxjs/toolkit";
let lasUserId = 0;

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push({
        id: ++lasUserId,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
