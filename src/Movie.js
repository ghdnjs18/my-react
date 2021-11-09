import React from "react";

function Movie({title, genres, cover, summary}) {
    return (
        <div>
            <img src={cover} alt={title}></img>
            <h3>{title}</h3>
            {/* "comedy fiction" 배열을 하나의 문자여롤 조인 */}
            <h4>{genres.join('')}</h4>
            <p>{summary}</p>
        </div>
    )
}

export default Movie