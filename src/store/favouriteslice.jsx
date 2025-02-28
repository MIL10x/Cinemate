import { createSlice } from "@reduxjs/toolkit";

const favouriteslice = createSlice({
  name: "favour",
  initialState: {
    favourlist: [],
  },
  reducers: {
    add(state, action) {
      const updatedList = state.favourlist.concat(action.payload);
      return { ...state, favourlist: updatedList };
    },
    remove(state, action) {
      const updateList = state.favourlist.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, favourlist: updateList };
    },
  },
});

export const { add, remove } = favouriteslice.actions;
export const favourreducer = favouriteslice.reducer;
