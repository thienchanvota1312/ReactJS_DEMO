import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="MovieContainer" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt={result.Title} />
		</div>
	)
}

export default Result