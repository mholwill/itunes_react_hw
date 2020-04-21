import React, { Component } from 'react'
import SongList from '../components/SongList';

export default class SongsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            selectedSongTitle: ''
        };
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({
            songs: songs.feed.entry
        }))
    }


  render() {
    return (
      <div className="app-text">
        <h2>Top 20 ITunes Chart</h2>
        <SongList songs={this.state.songs}></SongList>
      </div>
    )
  }
}
