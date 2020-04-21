import React from 'react'

const SongItem = (props) => {

    return(
        <div>
            <li>{props.name}
                <ul>
                    <li>{props.artist}</li>
                </ul>
            </li>
        </div>
    )
}

export default SongItem;
