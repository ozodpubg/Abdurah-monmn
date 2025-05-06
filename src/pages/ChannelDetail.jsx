import { useParams } from "react-router-dom";
import { $api } from "../utils";
import ChannelCard from "../components/channel-card";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Videos from "../components/videos";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);


  const { channelId } = useParams(); 

  const fetChannelDetail = async () => {
    try {
      setLoading(true);
      const response = await $api.get(`/videos?part=snippet&id=${channelId}`);
      if (response.status === 200) {
        setChannelDetail(response.data.items[0]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await $api.get(`/search?channelId=${channelId}&part=snippet,id&order=date`);
      if (response.status === 200) {
        setVideos(response.data.items);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetChannelDetail();
    fetchData();
  }, [channelId]);

  return (
    <div className="min-h-[92vh] bg-black">
      <div>
        <div className="h-[300px] bg-custom-gradient z-10" />
        <div className="relative -top-32">
          <ChannelCard channelDetail={ChannelDetail} />
        </div>
      </div>
      <div className="p-4 flex mx-auto w-full relative -top-32 px-4 lg:px-[100px]">
        {loading ? <Loader /> : <Videos videos={videos} />}
      </div>
    </div>
  );
  
}
