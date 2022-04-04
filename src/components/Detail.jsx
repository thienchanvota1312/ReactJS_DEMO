import React from 'react'

function Detail({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
					<img src={selected.Poster} />
			<div className="InfoCol">
            <div className="Info">
              Language: <span>{selected.Language}</span>
            </div>
            <div className="Info">
              Rated: <span>{selected.Rated}</span>
            </div>
            <div className="Info">
              Released: <span>{selected.Released}</span>
            </div>
            <div className="Info">
              Runtime: <span>{selected.Runtime}</span>
            </div>
            <div className="Info">
              Genre: <span>{selected.Genre}</span>
            </div>
            <div className="Info">
              Director: <span>{selected.Director}</span>
            </div>
            <div className="Info">
              Actors: <span>{selected.Actors}</span>
            </div>
            <div className="Info">
              Plot: <span>{selected.Plot}</span>
            </div>
            <div className="Info">
              Type: <span>{selected.Type}</span>
            </div>
			  </div>
      	<button className="close" onClick={closePopup}>Close</button>
				</div>
		</section>
	)
}

export default Detail