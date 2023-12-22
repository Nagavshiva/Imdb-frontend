import { createAsyncThunk } from '@reduxjs/toolkit';
import movieService from '../services/movieService';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async() => {
        const response = await movieService.getAllMovies();
        console.log(response)
        return response;
   
})

export const fetchMoviesById = createAsyncThunk('movies/fetchMoviesById', async(id) => {
    const response = await movieService.getMovieById(id);
    console.log(response)
    return response;

})

// Async thunk for adding a movie
export const addMovie = createAsyncThunk('movies/addMovie', async (movieData) => {
    const response = await movieService.addMovie(movieData);
    console.log(response);
    return response;
  });
  
  // Async thunk for editing a movie
  export const editMovie = createAsyncThunk('movies/editMovie', async ({ id, movieData }) => {
    const response = await movieService.editMovie(id, movieData);
    console.log(response);
    return response;
  });