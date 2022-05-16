import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoading = false;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    updateDocument(state, action) {
      state.isLoading = false;
      state.uid = action.payload.id;
    },
    getDocument(state, action) {
      state.isLoading = false;
      state.username = action.payload.username;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.avatar = action.payload.avatar;
      state.preferences = action.payload.preferences;
      state.country = action.payload.country;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.username = null;
      state.firstname = null;
      state.lastname = null;
      state.avatar = null;
      state.preferences = null;
      state.country = null;
    },
  },
  extraReducers: {},
});

export const { setUser, removeUser, updateDocument, getDocument } =
  userSlice.actions;

export default userSlice.reducer;
