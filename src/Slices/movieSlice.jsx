import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesVar: [
    { id: 1, name: "The Shawshank Redemption" },
    { id: 2, name: "It could happen to you" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.moviesVar[state.moviesVar.length - 1]
          ? state.moviesVar[state.moviesVar.length - 1].id + 1
          : 1,
        // if the length of moviesVar is 0, then the id of the new movie will be 1
        // length = 0 then id = 1
        // length = 1 then id = 2
        // length = 2 then id = 3
        // length = n then id = n + 1
        name: action.payload,
      };
      state.moviesVar.push(newMovie);
    },
    deleteMovie: (state, action) => {
      state.moviesVar = state.moviesVar.filter(
        (movie) => action.payload !== movie.id,
      );
    },
  },
});

export const { addMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
