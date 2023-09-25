// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';



const movieSlice = createSlice({
  name: 'movies',
  initialState:[],
  reducers: {
    getMovies:  (state, action) => {
        return action.payload
    }
  },
});

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;
