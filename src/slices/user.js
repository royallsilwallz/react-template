/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

const getUserSuccessFunc = (state, action) => {
  state.userData = action.payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequest() {},
    getUserSuccess: getUserSuccessFunc,
    getUserFailure() {},
  },
});

export const { getUserRequest, getUserSuccess, getUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
