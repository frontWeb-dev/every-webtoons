import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
  photoURL: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  photoURL: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      const temp = state;
      temp.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
