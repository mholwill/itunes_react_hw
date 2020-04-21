import React from 'react'
import './SongItem.css';

const SongItem = (props) => {

    return(
        <div className="list-items">
            <li className="song-details">
            <br></br>
              <a href={props.preview} target="_blank" rel="noopener noreferrer"><img src={props.image} alt="Song Artwork"></img></a>
                <h3>{props.name}</h3>
                <p>{props.artist}</p>
            </li>
        </div>
    )
}

export default SongItem;
