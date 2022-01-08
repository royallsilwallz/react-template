/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const incrementFunc = state => {
  state.value += 1;
};

const decrementFunc = state => {
  state.value -= 1;
};

const incrementByAmountFunc = (state, action) => {
  state.value += action.payload;
};

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: incrementFunc,
    decrement: decrementFunc,
    incrementByAmount: incrementByAmountFunc,
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const selectCount = state => state.counter.value;

export default slice.reducer;
