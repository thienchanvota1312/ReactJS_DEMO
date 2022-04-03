import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "./Home";

const Detail = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="DetailContainer">
      {movieInfo ? (
        <>
          <img src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className="InfoCol">
            <div className ="MovieName">
              <h1>{movieInfo?.Title}</h1>
            </div>
            <div className="Info">
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </div>
            <div className="Info">
              Year: <span>{movieInfo?.Year}</span>
            </div>
            <div className="Info">
              Language: <span>{movieInfo?.Language}</span>
            </div>
            <div className="Info">
              Rated: <span>{movieInfo?.Rated}</span>
            </div>
            <div className="Info">
              Released: <span>{movieInfo?.Released}</span>
            </div>
            <div className="Info">
              Runtime: <span>{movieInfo?.Runtime}</span>
            </div>
            <div className="Info">
              Genre: <span>{movieInfo?.Genre}</span>
            </div>
            <div className="Info">
              Director: <span>{movieInfo?.Director}</span>
            </div>
            <div className="Info">
              Actors: <span>{movieInfo?.Actors}</span>
            </div>
            <div className="Info">
              Plot: <span>{movieInfo?.Plot}</span>
            </div>
            <div className="Info">
              Type: <span>{movieInfo?.Type}</span>
            </div>
          </div>
          <button className= "Close" onClick={() => props.onMovieSelect()}>X</button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default Detail;