import { useEffect, useState } from "react";
import youtube from '../apis/youtube';
const KEY = 'AIzaSyCGP1S1O-7fYmGdIpEg5gCggXo98HTaOEk';

const useVideo = (defaultSearchTerm) => {

  const [ videos, setVideos ] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  },[defaultSearchTerm])

  const search = async (searchText) => {
		const response = await youtube.get("/search", {
			params: {
				q: searchText,
				part: "snippet",
				type: "video",
				maxResults: 5,
				key: KEY,
			},
    });
    setVideos(response.data.items);
	};

  return [videos, search];

};

export default useVideo;
