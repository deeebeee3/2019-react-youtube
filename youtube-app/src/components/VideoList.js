import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => { //use destructuring to get videos from props

    const renderedList = videos.map((video) =>{
        return <VideoItem video={video} />;
    });

    return(
        <div>{renderedList}</div>
    );
};

export default VideoList;