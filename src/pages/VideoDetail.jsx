import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { $api } from "../utils";
import Loader from "../components/loader";
import Videos from "../components/videos";
import ReactPlayer from "react-player";
import { FaCheckCircle } from "react-icons/fa";
import { FaEye, FaHeart } from "react-icons/fa6";

export default function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchVideo = async () => {
    try {
      const response = await $api(`/videos?part=snippet,statistics&id=${id}`);
      setVideoDetail(response.data.items[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video details:", error);
      setLoading(false);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      const response = await $api.get(`/search?part=snippet&relatedToVideoId=${id}&type=video`)
      if (response.status === 200) {
        setVideos(response.data.items);
        setLoading(false);
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideo();
    fetchRelatedVideos();
  }, [id]);

  if (loading) {
    return (
      <div className="flex bg-black justify-center items-center h-screen">
        <Loader />
      </div>
    )
  }
  return (
    <div className='flex xl:flex-row flex-col gap-4 max-h-[90vh] overflow-y-scroll bg-black px-4 lg:px-12 relative py-4'>
      <div className="lg:h-[90vh] bg-black">
        <div className='lg:w-[1100px] md:w-650px] sm:w-[450px] w-[280px] lg:h-[550px] md:h-[400px] sm:h-[350px]'>
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        <div className="p-4 bg-black">
          <h2 className="md:text-xl flex text-white text-lg">
            {videoDetail?.snippet?.title}
          </h2>
          <div className="flex gap-3 justify-between flex-wrap">
            <h2 className='text-lg text-gray-600 flex items-center gap-2'>{videoDetail?.snippet?.channelTitle} <FaCheckCircle className='text-green-600' /></h2>
            <div className='flex flex-wrap gap-8'>
              <h3 className='flex items-center gap-1 text-cherry font-bold shadow-sm text-xl'><FaHeart /> {videoDetail?.statistics?.likeCount}</h3>
              <h3 className='flex items-center gap-1 text-blue-900 font-bold shadow-sm text-xl'><FaEye /> {videoDetail?.statistics?.viewCount}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-black h-auto lg:overflow-y-auto'>
        <Videos videos={videos} />
      </div>
    </div>
  );
}
