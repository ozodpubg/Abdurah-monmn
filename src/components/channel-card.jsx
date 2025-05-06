import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constant'

export default function ChannelCard({ channelDetail }) {
  return (
    <div className='shadow-none rounded-[20px] flex justify-center items-center md:w-[320px] xs:w-[356px] h-[326px] mx-auto'>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div
          className='flex flex-col text-center text-white'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <div className='rounded-full h-[180px] w-[180px] mb-4 border-[1px] border-[#e3e3e3]'>
            <img
              className='w-full h-full object-cover rounded-full'
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
            />
          </div>

          <p className='flex items-center justify-center' variant='h6'>
            {channelDetail?.snippet?.title}{' '}
            <CiCircleCheck className='text-md text-gray-500 ml-2' />
          </p>

          {channelDetail?.statistics?.subscriberCount && (
            <p className='text-md font-medium text-gray-500'>
              {parseInt(
                channelDetail.statistics.subscriberCount
              ).toLocaleString('en-US')}{' '}
              Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  )
}
