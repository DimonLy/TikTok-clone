import React, { useEffect, useState } from 'react';
import Axios from './axios';
import './App.css';
import Video from './components/Video';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ _id, url, channel, description, song, likes, messages, shares }) => (
          <Video
            key={_id}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
