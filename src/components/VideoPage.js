import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../utils/constant";
const VideoPage = () => {
  const [video, setVideo] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API + "&id=" + videoId);
    const json = await data.json();
    console.log(json.items[0].snippet);
    setVideo(json.items[0]);
  };

  return (
    <div className="px-5 py-5">
      <iframe
        className=""
        width="1400"
        height="700"
        src={"https://www.youtube.com/embed/" + videoId}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div></div>
    </div>
  );
};

export default VideoPage;
