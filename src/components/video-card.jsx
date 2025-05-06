import React from "react";
import { Link } from "react-router-dom";
import { demoChannelUrl, demoChannelTitle, demoThumbnailUrl, demoVideoUrl, demoVideoTitle } from "../utils/constant";
import { CiCircleCheck } from "react-icons/ci";

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <div className="w-full sm:w-[358px] md:w-[320px] shadow-none rounded-none">
      <Link to={videoId ? `/video/${videoId}` : '/video/cV2gBU6hKfY'}>
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          className="h-[190px] w-full sm:w-[358px] object-cover"
        />
      </Link>
      <div className="bg-[#1E1E1E] h-[106px] px-3">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div className="line-clamp-2 mb-4 text-white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </div>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <div className="flex items-center gap-4 text-gray-200">
            {snippet?.channelTitle || demoChannelTitle}
            <CiCircleCheck className="text-sm text-gray-50 dark:text-gray-500 ml-2" />
          </div>
        </Link>
      </div>
    </div>
  );
}
