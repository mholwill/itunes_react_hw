import React from 'react'

const SongItem = (props) => {

    return(
        <div>
            <li>{props.name}
                <ul>
                    <li>{props.artist}</li>
                </ul>
            </li>
            <a href={props.preview} target="_blank" rel="noopener noreferrer"><img src={props.image} alt="Song Artwork"></img></a>
        </div>
    )
}

export default SongItem;
