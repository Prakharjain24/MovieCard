import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncMoviesOrShowsDetail } from '../../features/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    if(term === '') {
        alert('Please enter Search Terms !')
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncMoviesOrShowsDetail(term));
    setTerm('');
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={searchHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
