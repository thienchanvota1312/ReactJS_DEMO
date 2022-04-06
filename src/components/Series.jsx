import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Pagination from "./Pagination"
import NavBar from './NavBar'


function Series() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const moviesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const search = (e) => {
    if (e.key === "Enter") {
      axios(process.env.REACT_APP_URL_ENDPOINT + "s=" + state.s + "&apikey=" + process.env.REACT_APP_API_KEY + "&type=series").then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }


  useEffect(()=>{
    axios(process.env.REACT_APP_URL_ENDPOINT + "s=dragon" + "&apikey=" + process.env.REACT_APP_API_KEY + "&type=series").then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
  },[])
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(process.env.REACT_APP_URL_ENDPOINT + "apikey=" + process.env.REACT_APP_API_KEY + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const indexOfLastMovie = currentPage*moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = state.results.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    < div className="MovieListContainer">
    <div className = "Container">
        <div className = "AppName">
        <h1>DongPhym.Com</h1>
        </div>
        <div className="nav">
          <NavBar/>
          <Search handleInput={handleInput} search={search} />
        </div>
        <Results results={currentMovie} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Detail selected={state.selected} closePopup={closePopup} /> : false}
        <Pagination 
        moviesPerPage={moviesPerPage} 
        totalMovies={state.results.length} 
        onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Series