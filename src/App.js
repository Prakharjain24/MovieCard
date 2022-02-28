import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import MovieDetail from "./components/MovieDetail/movieDetail";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import Footer from "./components/Footer/footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
