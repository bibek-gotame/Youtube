import { buttonsData } from "../../../utils/constant"
import Button from "./Button"
import VideoContainer from "./VideoContainer"
function MainContainer() {
 return (
    <div className= "pt-5 w-full">
      <div className="flex gap-4 overflow-x-scroll  lg:overflow-x-visible items-center ">{buttonsData.map((b)=> <Button data={b.name} key={b.id}/>)}</div>
  
      <VideoContainer/>
    </div>
  )
}

export default MainContainer