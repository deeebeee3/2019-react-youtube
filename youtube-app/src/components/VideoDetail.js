import React from "react";

//use destructuring to get videos from props
const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>;
    }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
