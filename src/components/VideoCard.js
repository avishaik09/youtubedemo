


import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 h-80 shadow-lg flex flex-wrap flex-col">
     
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
     
      <div className="flex flex-wrap">
       
        <div>
          <h6 className=" font-bold ">{title}</h6>
          <p className="text-gray-dark text-xs ">
            {channelTitle}
          </p>
          <p className="text-base font-thin">
            {statistics.viewCount} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
