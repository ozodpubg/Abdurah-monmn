import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { $api } from "../utils";
import Videos from "../components/videos";
import Loader from "../components/loader";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchTerm } = useParams(); // URL-dan qidiruv so'zini olish

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const response = await $api.get(`/search?part=snippet&q=${searchTerm}&maxResults=50`);
      if (response.status === 200) {
        setVideos(response.data.items);
      }
    } catch (err) {
      console.error("Error fetching search results:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="min-h-[92vh] bg-black">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white mb-4">
          Search Results for: <span className="text-red-500">{searchTerm}</span>
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <Loader />
          </div>
        ) : (
          <Videos videos={videos} />
        )}
      </div>
    </div>
  );
}
