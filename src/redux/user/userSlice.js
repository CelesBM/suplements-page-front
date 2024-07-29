import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      /* return {
        ...state, //no se si va
        currentUser: action.payload,
      };*/
    },
    //nuevo
    clearUser: (state) => {
      state.currentUser = null;
    },
    //
    setVerified: (state) => {
      if (state.currentUser) {
        state.currentUser.verified = true;
      }
    },
    toggleMenuHidden: (state) => {
      return {
        ...state, //no se si va
        hiddenMenu: !state.hiddenMenu,
      };
    },
  },
});

export const { setCurrentUser, clearUser, setVerified, toggleMenuHidden } =
  userSlice.actions;

export default userSlice.reducer;
