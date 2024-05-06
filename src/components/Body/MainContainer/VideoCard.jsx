import { useEffect, useRef, useState } from "react";

function VideoCard({ video }) {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  const [isTruncated, setIsTruncated] = useState(false);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      // Check if the paragraph exceeds two lines
      if (paragraphRef.current.clientHeight > 2 * parseFloat(getComputedStyle(paragraphRef.current).lineHeight)) {
        setIsTruncated(true);
      }
    }
  }, [title]);
  return (
    <div className="w-[16rem] h-full rounded-lg shadow-md">
      <img
        className="rounded-lg "
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li
          ref={paragraphRef}
          className={`overflow-hidden  font-bold ${
            isTruncated ? "line-clamp-2" : ""
          }`}
        >
          {" "}
          {title}
        </li> 
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
