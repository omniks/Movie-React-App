import React from 'react'

function Modal ({active, setActive, title, overview, poster_path, release_date, genres}) {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <p>{title}</p>
                <p>{poster_path}</p>
                <p>{overview}</p>
                <p>{genres}</p>
                <p>{release_date}</p>
            </div>

        </div>
    )
}

export default Modal