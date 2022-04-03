import React, { useState, useEffect } from "react";
import Axios from "axios";
import Movie from "./Movie"; 
import Detail from "./Detail"; 
import Pagination from "./Pagination"; 


export const API_KEY = "6f5e44e9";


function Home() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();
  const moviesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);


  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  useEffect(()=>{
    fetchData("super")
  },[])

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const indexOfLastMovie = currentPage*moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = movieList ?.slice(indexOfFirstMovie, indexOfLastMovie);


  return (
    <React.Fragment>
    <div className = "Container">
        <div className = "AppName">
        <h1>DongPhym.Com</h1>
        </div>
        <div className="SearchBox">
          <input
            placeholder="Search Movie ..."
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      {selectedMovie && <Detail selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>} 
      < div className="MovieListContainer">
        {movieList ?.length ? (
          currentMovie.map((movie, index) => (
            <Movie
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
            'No film found...'
        )}
      </div>
      <div className="pagination">  
      <Pagination 
        moviesPerPage={moviesPerPage} 
        totalMovies={movieList ?.length} 
        onPageChange={handlePageChange}
      />
      </div>
    </div>
    </React.Fragment>
  );
}

export default Home;