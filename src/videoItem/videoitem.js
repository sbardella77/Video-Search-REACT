/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './videoItem.css'

const Videoitem = ({ video, onVideoSelect }) => {
  return (

    <div onClick={() => onVideoSelect(video)} className='item video-item'>
      <img className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}

      />
      <div className='content'>
        {video.snippet.title}
      </div>

    </div>
  )
}

export default Videoitem
