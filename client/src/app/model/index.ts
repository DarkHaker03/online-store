import { createSlice } from '@reduxjs/toolkit';

type State = { a: number };

const initialState: State = { a: 1 };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
