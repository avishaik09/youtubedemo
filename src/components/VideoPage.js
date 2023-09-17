import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../utils/constant";
import { closeSidebar } from "../utils/sidebarSlice";

import CommentsContainer from "./Comments";


const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState([]);
  console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();




  useEffect(() => {
    getVideo();
    dispatch(closeSidebar());
    console.log("useEffect called");
   },[]);

  const getVideo = async () => {
    console.log("get video called");
    const data = await fetch(VIDEO_API + "&id=" + searchParams.get("v"));
    const json = await data.json();
    console.log(json.items[0].snippet);
    console.log(json.items[0]);
    setVideo(json.items[0]);

  };

console.log("render");

  return (
    <div className="px-5 py-5 flex flex-col">
      <iframe
        className=""
        width="1400"
        height="720"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
        <div>
          <h6 className=" font-bold ">{video.snippet?.title}</h6>
          <p className="text-gray-dark text-xs ">
            {video.snippet?.channelTitle}
          </p>
          <p className="text-base font-thin">
            {video.statistics?.viewCount} views
          </p>
        </div>
     <CommentsContainer/>
    
    </div>
  );
};



export default VideoPage;
