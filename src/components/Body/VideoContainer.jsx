import { useEffect } from "react"

function VideoContainer() {

    const getVideos = async ()=>{
        const data = await fetch()
    }
    useEffect(()=>{
        getVideos()
    },[])
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer