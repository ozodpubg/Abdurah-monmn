
import { useEffect, useState } from 'react';
import { $api } from '../utils';
import Sidebar from '../components/sidebar';
import Videos from '../components/videos';
import Loader from '../components/loader';

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      const response = await $api.get(`/search?part=snippet&q=${selectedCategory}&maxResults=50`);
      setVideos(response.data.items);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [selectedCategory]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(videos);

  return (
    <div className="bg-black h-[90vh] w-full text-white flex flex-col lg:flex-row gap-5">
      <div>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="h-[90vh] overflow-y-scroll w-full px-4">
        <h1 className="text-4xl font-bold mb-3">
          {selectedCategory} <span className="text-cherry">Videos</span>
        </h1>
        {loading ? <Loader /> : <Videos videos={videos}/>}
        
      </div>
    </div>
  );
}