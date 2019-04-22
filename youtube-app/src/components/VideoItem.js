import "./VideoItem.css";
import React from "react";

//destructure video from props
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // use arrow function because want to call onVideoSelect with some argument
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
