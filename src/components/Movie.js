import React, { useState } from 'react';

function Movie({title, overview, vote_average, poster_path, release_date, genres}) {

    const genre = genres.map((genres) =><p> {genres} </p>);
    const [active, setActive ] = useState(false);



    return (
        <div className="movie" >
            <img src={poster_path} alt={title} onClick={() => setActive(true)}/>
            <div className="movie_info"  onClick={() => setActive(true)}>
            <div className="movie_info_head">
            <h3>{title}</h3>
            <p className="vote_average">{vote_average}</p>
            </div>
            <div className="movie_genre">{genre}</div>
            <div className="release_date">{release_date}</div>
            </div>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}  >
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <img src={poster_path} alt={title}/>
                <div className="modal_info">
                    <h2>{title}</h2>
                    <p className="modal_overview">{overview}</p>
                    <div className="modal_genre"><b>Genre:</b>{genre}</div>
                    <p><b>Release date: </b>{release_date}</p>
                    <button onClick={() => setActive(false)}>Close</button>
                </div>
            </div>
            
            </div>
        </div>
        
        

)
    };

export default Movie;
