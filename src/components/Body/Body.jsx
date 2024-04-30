import MainContainer from "./MainContainer"
import SideBar from "./SideBar"

function Body() {
  return (
    <div className="flex gap-4">
     <SideBar/>
     <MainContainer/>
    </div>
  )
}

export default Body