import React from "react";

//use destructuring to get videos from props
const VideoDetail = ({ video }) => {
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
