import React, { useState, useRef } from 'react';
import '../css/Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
