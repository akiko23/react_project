import { createSlice } from '@reduxjs/toolkit'

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    value: []
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    clear: state => {
      state.news = []
    },
  }
})

// Action creators are generated for each case reducer function
export const { set, clear } = newsSlice.actions

export default newsSlice.reducer