import React from 'react'
import SongItem from './SongItem'

const SongList = (props) => {

    const songItems = props.songs.map(song => {
        return <SongItem key={song.id.attributes['im:id']} name={song['im:name'].label}artist={song['im:artist'].label}></SongItem>
    })

    return(
        <div>
            <ol>
                {songItems}
            </ol>
        </div>
    )

}

export default SongList;