import React from "react";
import VideoItem from "./VideoItem";

//use destructuring to get videos from props
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
