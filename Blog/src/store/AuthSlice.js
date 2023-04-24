import { createSlice } from "@reduxjs/toolkit";

const InitState = {
  username:localStorage.getItem('user') ?  JSON.parse(localStorage.getItem("user")).username : null,
  id: localStorage.getItem('user') ?  JSON.parse(localStorage.getItem("user")).id : null,
  avatar: localStorage.getItem('user') ?  JSON.parse(localStorage.getItem("user")).avatar : null,
};

const AuthReducer = createSlice({
  name: "auth",
  initialState: InitState,
  reducers: {
  },
});

export default AuthReducer.reducer;
