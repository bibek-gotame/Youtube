import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { commentsData } from "../../../utils/constant";
import Comment from "./comments/Comment";
import CommentList from "./comments/CommentList";

function Watch() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [videoId] = useSearchParams();
  console.log(commentsData);
  return (
    <div className="px-40 py-2">
      <div>
        <iframe
          width="740"
          height="416"
          src={"https://www.youtube.com/embed/" + videoId.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </div>
      <div className="comments border-2 px-2 rounded-lg mt-2">
        <h1 className="font-bold my-2 text-lg">Comments:</h1>
        <div>
          <CommentList data={commentsData} />
        </div>
      </div>
    </div>
  );
}

export default Watch;
