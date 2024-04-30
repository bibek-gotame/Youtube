import { useEffect } from "react";
import { YTapi } from "../../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addYoutubeVideos } from "../../../utils/store/appSlice";
import VideoCard from "./VideoCard";
import {Link} from 'react-router-dom'
function VideoContainer() {
  const dispatch = useDispatch();
  const youtubeVideos = useSelector((store) => store.app.youtubeVideos);
  const getVideos = async () => {
    const data = await fetch(YTapi);
    const json = await data.json();
    const videos = await json.items;
    dispatch(addYoutubeVideos(videos));
  };
  useEffect(() => {
    !youtubeVideos && getVideos();
  }, []);
  return (
    <div className="flex gap-5 pt-5 flex-wrap">
      {youtubeVideos?.map((video) => (
        <Link key={video.id} to={'/watch' + video.id}><VideoCard  video={video} /></Link>
      ))}
    </div>
  );
}

export default VideoContainer;
