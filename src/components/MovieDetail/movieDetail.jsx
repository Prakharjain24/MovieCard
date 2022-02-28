import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMoviesOrShowsDetail,
  getAllMoviesOrShowsDetails,
  removeSelectedMovieOrShows,
} from "../../features/movies/movieSlice";
import "./movieDetail.scss";
import Loader from "../Loader/loader";

const MovieDetail = () => {
  const selectedMovieOrShows = useSelector(getAllMoviesOrShowsDetails);
  const dispatch = useDispatch();
  const { imdbID } = useParams();

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetail(imdbID));
    dispatch(removeSelectedMovieOrShows());
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(selectedMovieOrShows).length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{selectedMovieOrShows.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {selectedMovieOrShows.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {selectedMovieOrShows.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> :{" "}
                {selectedMovieOrShows.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calender"></i> :{" "}
                {selectedMovieOrShows.Year}
              </span>
            </div>

            <div className="movie-plot">
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{selectedMovieOrShows.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{selectedMovieOrShows.Actors}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{selectedMovieOrShows.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{selectedMovieOrShows.Languages}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{selectedMovieOrShows.Awards}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img
              src={selectedMovieOrShows.Poster}
              alt={selectedMovieOrShows.Title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
