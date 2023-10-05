import { createSlice } from "@reduxjs/toolkit";
export const cardnoteSlice = createSlice({
  name: "cardnote",
  initialState: {
    notes: [
      {
        title: "Feedbacks",
        bodyText:
          "Lorem ipsum dolor sit amet consectetur. vestibulum morbi tellus sit ac",
        footText: "5 days ago",
        isSelected: false,
      },
      {
        title: "Weekly Task",
        bodyText:
          "Lorem ipsum dolor sit amet consectetur. vestibulum morbi tellus sit ac",
        footText: "2 weeks ago",
        isSelected: false,
      },
    ],
    selectedIndex: -1,
  },
  reducers: {
    add: (state, action) => {
      state.notes.push({ ...action.payload, isSelected: false });
    },
    del: (state, action) => {
      console.log(state);
      console.log(action.payload, action.type);
      state.notes.splice(action.payload, 1);
    },
    edit: (state, action) => {
      state.selectedIndex = action.payload
    },
  },
});
export const { add, del, edit } = cardnoteSlice.actions;
export default cardnoteSlice.reducer;
