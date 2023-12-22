import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchMoviesById, addMovie, editMovie } from "../actions/movieActions";


// Movie slice
const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
        selectedMovie: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Fetch Movies
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })

        // Fetch Movie By Id
        builder.addCase(fetchMoviesById.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchMoviesById.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.selectedMovie = action.payload;
        });
        builder.addCase(fetchMoviesById.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })


        // Add Movie
        builder.addCase(addMovie.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(addMovie.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list.push(action.payload); // Assuming the response contains the newly added movie
        });
        builder.addCase(addMovie.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        // Edit Movie
        builder.addCase(editMovie.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(editMovie.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // Assuming the response contains the edited movie
            state.list = state.list.map(movie => (movie.id === action.payload.id ? action.payload : movie));
            state.selectedMovie = action.payload;
        });
        builder.addCase(editMovie.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });


    }
})
export default movieSlice.reducer;