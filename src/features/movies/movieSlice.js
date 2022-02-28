import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { addMovies } from '../../features/movies/movieSlice';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${term}&type=movie`);
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${term}&type=series`);
    return response.data;
})

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk('movies/fetchAsyncMoviesOrShowsDetail', async (id) => {
    const response = await movieApi
    .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    console.log(888, response);
    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShows: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShows: (state) => {
            state.selectedMovieOrShows = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fetching movies success');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fetching shows success');
            return { ...state, shows: payload }
        },
        [fetchAsyncMoviesOrShowsDetail.fulfilled]: (state, { payload }) => {
            console.log('fetch Movies Or Shows Detail success');
            return { ...state, selectedMovieOrShows: payload }
        },
    }
});

// export const { addMovies } = movieSlice.actions;
export const { removeSelectedMovieOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMoviesOrShowsDetails = (state) => state.movies.selectedMovieOrShows;
export default movieSlice.reducer; 