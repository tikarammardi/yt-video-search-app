import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import logo from './yt.png';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchFromSubmit('cats');
  }

  onSearchFromSubmit = async textInput => {
    const response = await youtube.get('/search', {
      params: {
        q: textInput
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          <img src={logo} alt="logo" style={{ width: '30px' }} />
        </div>
        <SearchBar onSearchFormSubmit={this.onSearchFromSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
