import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/movieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends";
    
    useEffect(() => {
        // const fetchMovies = async () => {
        //     const response = await movieApi
        //     .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        //     .catch((err) => 
        //     console.log("Error : ", err)
        //     )
        //     dispatch(addMovies(response.data));
        //     console.log("THe response From API : ", response);
        // }     
        // fetchMovies();
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
        }, []);

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
};

export default Home;