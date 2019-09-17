import React from 'react'
import Videoitem from '../videoItem/videoitem'

const Videolist = ({ myVideos, onVideoSelect }) => {
  const renderList = myVideos.map(video => {
    return (
      <Videoitem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}

      />)
  })

  return (
    <div className='ui relaxed divided list'>{renderList}</div>
  )
}

export default Videolist
