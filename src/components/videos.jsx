import React from 'react'
import VideoCard from './video-card'
import ChannelCard from './channel-card'

export default function Videos({ videos }) {
  return (
    <div className='flex justify-start gap-4 mx-auto flex-wrap'>
      {videos?.length > 0 && videos.map((item) => (
        <div key={item.id.videoId || item.id.channelId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  )
}
