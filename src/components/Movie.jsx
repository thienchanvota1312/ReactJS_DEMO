import React from "react";

const Movie = (props) => {
  const { Title, imdbID, Poster } = props.movie;

  return (
    <div className="MovieContainer"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={Poster} alt={Title} />
    </div>
  );
};
export default Movie;