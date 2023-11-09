import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state = { videos: [], selectedVideo: null };

    //function to ensure initial page has a default search to show at first render
    componentDidMount(){
        this.onTermSubmit('home');
    }

    //callback function called on submit from the SearchBar component
    onTermSubmit = async term => {
        const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    //callback function to the Videolist then to VideoItem to pick details of the selecter Videoitem
    onVideoSelect = video => {
        this.setState( {selectedVideo: video} );
    };

    render(){
        return (
        <div className='ui container'>
            <SearchBar onFormSubmit={ this.onTermSubmit } />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList 
                            onVideoSelect={ this.onVideoSelect } 
                            videos={this.state.videos} 
                        />
                    </div>
                </div>
            </div>
        </div>
        );
    };

};

export default App;