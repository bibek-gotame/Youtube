import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { commentsData } from "../../utils/constant";
import CommentList from "./comments/CommentList";
import LiveChat from "./LiveChat/LiveChat";

function Watch() {
  const [showChat, setshowChat] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [videoId] = useSearchParams();

 

  return (
    <div className=" py-2 px-4 lg:w-fit w-full lg:mx-auto">
      <div className="flex gap-4  ">
        <iframe
          src={"https://www.youtube.com/embed/" + videoId.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl w-full min-h-80 sm:min-h-[26rem] lg:w-[46rem]"
        ></iframe>
        <div className="hidden lg:inline-block">
        <LiveChat/>
        </div>
      </div>
      <div className="lg:hidden border-2  rounded-lg mt-2 w-full lg:w-[46.25rem]" onClick={()=>{setshowChat(!showChat)}}>
        <p className="pl-2 pb-4">Top Chats</p>
        <div className={!showChat && "hidden"}>
        <LiveChat/>
        </div>
      </div>
      <div className="l border-2 px-2 rounded-lg mt-2 w-full lg:w-[46.25rem]" >
        <h1 className="font-bold my-2 text-lg">Comments:</h1>
        <div>
          <CommentList data={commentsData} />
        </div>
      </div>
    </div>
  );
}

export default Watch;
