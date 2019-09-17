import React, { Component } from 'react'
import Searchbar from './searchBar/searchbar'
import Videodetail from './videoDetail/videodetails'
// import Videoitem from './videoItem/videoitem'
import Videolist from './videoList/videolist'
import youtube from './APIS/youtube'

class App extends Component {
  state = {
    videos:[],
    selectedVideo:null
  }

  componentDidMount(){
    this.onTermSubmit('tagesschau')
  }
  onTermSubmit = async (term)=>{
    // console.log(term)
    const response = await youtube.get('/search', {
      params:{
        q:term
      }
    })
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    })
  }
  onVideoSelect = (video)=>{
    this.setState({selectedVideo:video})
  }

  render () {
    return (
      <div className='ui container'>
        
        <Searchbar onFormSubmit={this.onTermSubmit}/>
        <div className='ui grid'>
        <div className='ui row'>
        <div className='eleven wide column'>
            <Videodetail video={this.state.selectedVideo}/>
        </div>
        <div className='five wide column'>
            <Videolist onVideoSelect ={this.onVideoSelect} myVideos={this.state.videos}/>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App
