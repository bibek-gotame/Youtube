
function VideoCard({video}) {
    const {snippet,statistics} = video
    const {channelTitle,title,thumbnails}= snippet
  return (
    <div className="w-[13rem] rounded-lg shadow-md">
        <img className="rounded-lg " src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className="font-bold">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>

        </ul>
    </div>
  )
}

export default VideoCard